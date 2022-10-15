const enum DEFAULT_VALUES {
  HOURLY_RATE = 900,
  NUMBER_OF_DAYS = 250,
  DEFAULT_PENSION = 2600,
  SICK_DAYS = 10,
  EXTRA_VACATION_DAYS = 0,
  OTHER_MONTHLY_COSTS = 1000,
  EXTRA_PENSION = 0,
  BASE_SALARY = 26000,
}

const enum DefaultSliderValues {
  SliderValue = 50,
  MinHourlyRate = 600,
  MaxHourlyRate = 1200,
}

type calculateSalaryArgs = {
  hourlyRate: number;
  sickDays: number;
  extraVacationDays: number;
  extraPension: number;
  otherMonthlyCosts: number;
};

const calculateSalary = ({
  hourlyRate,
  sickDays = 0,
  extraVacationDays = 0,
  extraPension = 0,
  otherMonthlyCosts = 0,
}: calculateSalaryArgs) => {
  const salary = Math.round(
    ((DEFAULT_VALUES.NUMBER_OF_DAYS / 12 -
      (sickDays + extraVacationDays) / 12 -
      2.5) *
      (hourlyRate * 8 * 0.7) -
      (DEFAULT_VALUES.DEFAULT_PENSION + extraPension) * 1.2426 -
      otherMonthlyCosts) /
      1.3142
  );

  if (salary < DEFAULT_VALUES.BASE_SALARY) {
    return DEFAULT_VALUES.BASE_SALARY;
  }

  return salary;
};

export { calculateSalary, DefaultSliderValues, DEFAULT_VALUES };
