import styles from "./People.module.css";
import arrow from "../icons/arrow.svg";
import type { IPerson } from "../peoples";
import type { Accessor } from "solid-js";
import {
  onMount,
  onCleanup,
  createSignal,
  createEffect,
  Signal,
} from "solid-js";

const Link = ({ url, title }: { url: string; title: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    classList={{ [styles.link]: true, [styles.highlight]: true }}
  >
    <span class={styles.linkText}>{title}</span> <img src={arrow} alt="" />
  </a>
);

const PeopleSlider = ({ people }: { people: Accessor<IPerson[]> }) => {
  const [touchDevice, setTouchDevice] = createSignal(true);
  const [highlightedPerson, setHighlightedPerson]: Signal<IPerson | undefined> =
    createSignal();
  let peopleElementsRefs: HTMLDivElement[] = Array.from({
    length: people().length,
  });
  let peopleParentRef: HTMLDivElement | undefined;

  onMount(() => {
    window.addEventListener("touchstart", () => setTouchDevice(true));
  });

  onCleanup(() => {
    window.removeEventListener("touchstart", () => setTouchDevice(true));
  });

  createEffect(() => {
    if (touchDevice()) {
      highlightCenter();
    }
  });

  const highlightCenter = () => {
    const personRenderWidth = peopleElementsRefs[0].offsetWidth;
    const peopleOnScreen = peopleParentRef!.offsetWidth / personRenderWidth;
    const center = Math.floor(peopleOnScreen / 2);
    setHighlightedPerson(people()[center]);
  };

  const mouseEnter = (name: IPerson) => {
    setHighlightedPerson(name);
  };

  return (
    <div class={styles.people} ref={peopleParentRef}>
      {people().map((person, index) => (
        <div class={styles.person}>
          <div
            class={styles.preview}
            style={{ "background-image": `url(${person.image})` }}
            onMouseEnter={() => mouseEnter(person)}
          />
          <div
            classList={{
              [styles.details]: true,
              [styles.highlighted]:
                person.name === highlightedPerson()?.name ?? false,
            }}
            style={{ "background-image": `url(${person.image})` }}
            ref={peopleElementsRefs[index]}
          >
            <div
              classList={{
                [styles.name]: true,
                [styles.highlighted]:
                  person.name === highlightedPerson()?.name ?? false,
              }}
            >
              {person.name}
            </div>
            <div class={styles.bottomDetails}>
              <div
                classList={{ [styles.quote]: true, [styles.highlight]: true }}
              >
                {person.quote}
              </div>
              {person.linkedInUrl && (
                <Link url={person.linkedInUrl} title="LinkedIn" />
              )}
              {person?.profileUrl && (
                <Link url={person.profileUrl} title="Profil" />
              )}
              {person.mail && (
                <Link url={"mailto:" + person.mail} title={person.mail} />
              )}
              {person.phone && (
                <Link url={"tel:" + person.phone} title={person.phone} />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleSlider;
