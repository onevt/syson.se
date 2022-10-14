import { createSignal, createEffect } from "solid-js";
import {
  calculateSalary,
  DEFAULT_VALUES,
  DefaultSliderValues,
} from "../utils/salary";
import Slider from "./Slider";
import styles from "./SalarySlider.module.css";

const locale = "sv-SE";

const SalarySlider = () => {
  const min = DefaultSliderValues.MinHourlyRate;
  const max = DefaultSliderValues.MaxHourlyRate;
  const [percentage, setPercentage] = createSignal(
    DefaultSliderValues.SliderValue
  );
  const [rate, setRate] = createSignal(
    Math.round((percentage() / 100) * (max - min) + min)
  );

  createEffect(() => {
    const rate = Math.round((percentage() / 100) * (max - min) + min);
    setRate(rate);
  });

  return (
    <div class={styles.SalarySlider}>
      <div class={styles.background} />
      <div class={styles.moneyBox}>
        <div>
          <span class={styles.label}>Timpris</span>
          <span class={styles.money}>{rate().toLocaleString(locale)}</span>
          <span class={styles.label}>Kr</span>
        </div>
        <div class={styles.slider}>
          <Slider
            initialValue={DefaultSliderValues.SliderValue}
            value={setPercentage}
            min={min}
            max={max}
          />
        </div>
        <div>
          <span class={styles.label}>Lön</span>
          <span class={styles.money}>
            {calculateSalary({
              hourlyRate: rate(),
              sickDays: DEFAULT_VALUES.SICK_DAYS,
              extraVacationDays: DEFAULT_VALUES.EXTRA_VACATION_DAYS,
              extraPension: DEFAULT_VALUES.EXTRA_PENSION,
              otherMonthlyCosts: DEFAULT_VALUES.OTHER_MONTHLY_COSTS,
            })}
          </span>
          <span class={styles.label}>Kr</span>
        </div>
      </div>
    </div>
  );
};

export default SalarySlider;
