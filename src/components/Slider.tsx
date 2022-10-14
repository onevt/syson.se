import {
  onMount,
  createSignal,
  onCleanup,
  createEffect,
  Setter,
} from "solid-js";
import styles from "./Slider.module.css";

export const Slider = ({
  min,
  max,
  initialValue,
  value,
}: {
  min: number;
  max: number;
  initialValue: number;
  value: Setter<number>;
}) => {
  let barRef: HTMLDivElement;
  const [dragging, setDragging] = createSignal(false);
  const [percentage, setPercentage] = createSignal(initialValue);

  createEffect(() => {
    const e = percentage();
    value(e);
  });

  const mouseDown = (event: MouseEvent) => {
    if (event.buttons !== 1) return; // only left click
    setDragging(true);
    handleChange(event.clientX);
  };

  const mouseUp = () => {
    setDragging(false);
  };

  const mouseMove = (event: MouseEvent) => {
    if (dragging()) {
      handleChange(event.clientX);
    }
  };

  const handleChange = (clientX: number) => {
    const { left, width } = barRef.getBoundingClientRect();
    const percentage = ((clientX - left) / width) * 100;
    if (percentage <= 0) {
      setPercentage(0);
    } else if (percentage >= 100) {
      setPercentage(100);
    } else {
      setPercentage(percentage);
    }
  };

  onMount(() => {
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);
  });

  onCleanup(() => {
    document.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mousemove", mouseMove);
  });

  const handleTouchMove = (event: TouchEvent) => {
    handleChange(event.touches[0].clientX);
  };

  return (
    <div
      class={styles.slider}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onMouseDown={mouseDown}
    >
      <div class={styles.bar} ref={barRef!}>
        <div class={styles.barFill} style={{ width: `${percentage()}%` }} />
        <div
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
              event.preventDefault();
              if (percentage() <= 0) {
                setPercentage(0);
              } else {
                setPercentage(percentage() - 1);
              }
            }
            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
              event.preventDefault();
              if (percentage() >= 100) {
                setPercentage(100);
              } else {
                setPercentage(percentage() + 1);
              }
            }
            if (event.key === "Home") {
              event.preventDefault();
              setPercentage(0);
            }
            if (event.key === "End") {
              event.preventDefault();
              setPercentage(100);
            }
          }}
          tabIndex={0}
          style={{ left: `${percentage()}%` }}
          class={styles.handle}
          role="slider"
          aria-label="hourly rate"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={percentage()}
        />
      </div>
    </div>
  );
};

export default Slider;
