import { createSignal, createEffect } from "solid-js";
import { calculateSalary, DEFAULT_VALUES } from "../utils/salary";
import styles from "./Kalkylen.module.css";

const [hourlyRate, setHourlyRate] = createSignal(DEFAULT_VALUES.HOURLY_RATE);
const [extraPension, setExtraPension] = createSignal(
  DEFAULT_VALUES.EXTRA_PENSION
);
const [extraVacationDays, setExtraVacationDays] = createSignal(
  DEFAULT_VALUES.EXTRA_VACATION_DAYS
);
const [otherMonthlyCosts, setOtherMonthlyCosts] = createSignal(
  DEFAULT_VALUES.OTHER_MONTHLY_COSTS
);
const [sickDays, setSickDays] = createSignal(DEFAULT_VALUES.SICK_DAYS);

const [salary, setSalary] = createSignal(
  calculateSalary({
    hourlyRate: hourlyRate(),
    extraPension: extraPension(),
    extraVacationDays: extraVacationDays(),
    otherMonthlyCosts: otherMonthlyCosts(),
    sickDays: sickDays(),
  })
);

createEffect(() => {
  setSalary(
    calculateSalary({
      hourlyRate: hourlyRate(),
      extraPension: extraPension(),
      extraVacationDays: extraVacationDays(),
      otherMonthlyCosts: otherMonthlyCosts(),
      sickDays: sickDays(),
    })
  );
});

const Kalkylen = () => {
  return (
    <div class={styles.container}>
      <div class={styles.inputContainer}>
        <div class={styles.inputs}>
          <div>
            <label for="hourlyRate" class={styles.label}>
              Timpris
            </label>
            <input
              id="hourlyRate"
              name="hourlyRate"
              type="number"
              value={hourlyRate()}
              class={styles.input}
              min="0"
              onChange={({ currentTarget }) =>
                setHourlyRate(parseInt(currentTarget.value))
              }
            />
            <label
              classList={{ [styles.label]: true, [styles.labelSmall]: true }}
            >
              Ditt pris mot kund
            </label>
          </div>
          <div>
            <label for="sickDays" class={styles.label}>
              Sjukdagar / Utan uppdrag
            </label>
            <input
              id="sickDays"
              name="sickDays"
              type="number"
              value={sickDays()}
              class={styles.input}
              min="0"
              onChange={({ currentTarget }) =>
                setSickDays(parseInt(currentTarget.value))
              }
            />
            <label
              classList={{ [styles.label]: true, [styles.labelSmall]: true }}
            >
              per år
            </label>
          </div>
          <div>
            <label for="extraVacationDays" class={styles.label}>
              Extra semesterdagar
            </label>
            <input
              id="extraVacationDays"
              name="extraVacationDays"
              type="number"
              value={extraVacationDays()}
              class={styles.input}
              min="0"
              onChange={({ currentTarget }) =>
                setExtraVacationDays(parseInt(currentTarget.value))
              }
            />
            <label
              classList={{ [styles.label]: true, [styles.labelSmall]: true }}
            >
              Utöver 30 dagars semester
            </label>
          </div>
          <div>
            <label for="otherMonthlyCosts" class={styles.label}>
              Övriga kostnader
            </label>
            <input
              id="otherMonthlyCosts"
              name="otherMonthlyCosts"
              type="number"
              value={otherMonthlyCosts()}
              class={styles.input}
              min="0"
              onChange={({ currentTarget }) =>
                setOtherMonthlyCosts(parseInt(currentTarget.value))
              }
            />
            <label
              classList={{ [styles.label]: true, [styles.labelSmall]: true }}
            >
              Telefon, mm. per månad
            </label>
          </div>
          <div>
            <label for="extraPension" class={styles.label}>
              Extra pensionsavsättning
            </label>
            <input
              id="extraPension"
              name="extraPension"
              type="number"
              value={extraPension()}
              class={styles.input}
              min="0"
              step="100"
              onChange={({ currentTarget }) =>
                setExtraPension(parseInt(currentTarget.value))
              }
            />
            <label
              classList={{ [styles.label]: true, [styles.labelSmall]: true }}
            >
              Utöver 2600kr. per månad
            </label>
          </div>
        </div>
      </div>
      <div class={styles.results}>
        <div class={styles.result}>
          <span class={styles.resultLabel}>Månadspension</span>
          <span class={styles.resultValue}>
            {DEFAULT_VALUES.DEFAULT_PENSION + extraPension()} kr
          </span>
        </div>
        <div classList={{ [styles.result]: true, [styles.highlight]: true }}>
          <label for="salary" class={styles.resultLabel}>
            Månadslön
          </label>
          <span>
            <input
              id="salary"
              type="number"
              readOnly
              value={salary()}
              class={styles.resultInputValue}
              style={{ width: salary().toString().length + "ch" }}
            />
            <b>Kr</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Kalkylen;
