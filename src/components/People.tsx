import { createSignal, createMemo } from "solid-js";
import arrow from "../icons/arrow.svg";
import styles from "./People.module.css";
import PeopleSlider from "./PeopleSlider";
import allPeople from "../peoples";

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

const People = () => {
  const people = createMemo(() => allPeople);
  const [showAllPeople, setShowAllPeople] = createSignal(false);

  const toggleShowAllPeople = () => {
    setShowAllPeople(!showAllPeople());
  };

  return (
    <>
      {!showAllPeople() && <PeopleSlider people={people} />}
      {showAllPeople() && (
        <div classList={{ container: true, [styles.allPeople]: true }}>
          {people().map((person) => (
            <div class={styles.allPeoplePerson}>
              <div
                classList={{
                  [styles.details]: true,
                  [styles.highlighted]: true,
                }}
                style={{ "background-image": `url(${person.image})` }}
              >
                <div class={styles.name}>{person.name}</div>
                <div class={styles.bottomDetails}>
                  <div class={styles.quote}>{person.quote}</div>
                  {person.linkedInUrl && (
                    <Link url={person.linkedInUrl} title="LinkedIn" />
                  )}
                  {person.profileUrl && (
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
      )}
      <div classList={{ container: true, [styles.buttonContainer]: true }}>
        <button
          classList={{
            [styles.button]: !showAllPeople(),
            [styles.invertedButton]: showAllPeople(),
          }}
          onClick={toggleShowAllPeople}
        >
          {showAllPeople() ? "DÖLJ" : "VISA ALLA"}
        </button>
      </div>
    </>
  );
};

export default People;
