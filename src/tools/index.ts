export const getSoftwareCount = () => {
  // получение количества зарегистрированного ПО
  return (13438).toLocaleString();
};

export const getRightholderCount = () => {
  // получение количества правообладателей
  return (4272).toLocaleString();
};

export const ConvertSizeToMb = (num: number) => {
  if (num < 1000) return `${num} Кб`;
  return `${(num / 1024).toFixed(2)} Мб`;
};

export const convertPhone = (str: string) => {
  const [countryCode, cityCode, num1, num2, num3] = str.split(' ');
  return `+${countryCode} ${cityCode} ${num1} ${num2} ${num3}`;
};
