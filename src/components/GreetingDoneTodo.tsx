// components/Greeting.tsx
export const GreetingDoneToDo = () => {
  const currentHour = new Date().getHours();

  let greeting = "";
  if (currentHour < 10) {
    greeting = "Ta sovmorgon idag! 💤";
  } else if (currentHour > 10 && currentHour < 18) {
    greeting = "Koppla av med en glass i solen! 🍦☀️";
  } else {
    greeting = "Ha en skön kväll! 🌙";
  }

  return <span>{greeting}</span>;
};
