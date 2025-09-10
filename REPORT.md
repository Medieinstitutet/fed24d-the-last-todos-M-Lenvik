# 📌 Rättningsrapport – fed24d-the-last-todos-M-Lenvik

## 🎯 Uppgiftens Krav:
# Kurs: Javascript ramverk - React

## Utbildning till Frontend developer på Medieinstitutet

Detta är första gången jag arbetar med React och Tailwind. Se uppgiftsbeskrivning nedan.

Skapad av **Marie Lenvik** <br> https://github.com/M-Lenvik

## Innehållsförteckning

1. [Beskrivning av sidan](#-beskrivning-av-sidan--todo-app-i-react)
2. [Kom igång med projektet](#kom-igång-med-projektet)
   1. [Installera genom följande](#installera genom följande:)
3. [Tekniker som använts](#tekniker-som-använts)
4. [Uppgiftsbeskrivning](#uppgiftsbeskrivning)
   1. [Uppgiftskrav på G-nivå](#uppgiftskrav-på-g-nivå)
   2. [Uppgiftskrav på VG-nivå](#uppgiftskrav-på-vg-nivå)
5. [Bilder](#bilder)
6.  [ToDo Appen] (#todo-appen)
7. [Slutbetyg](#slutbetyg)

## 🔍 Beskrivning av sidan 📚 ToDo App i React

Sidan skall visa ett antal ToDo-punkter. Dessa visas på skärmen som en lista. När man gjort en ToDo kan användaren markera uppgiften som slutförd och uppgiften tas då bort från listan med aktiva ToDo's.

## Kom igång med projektet

**🛠️ Installera genom följande:**

1. Kloning av projektet
(https://github.com/Medieinstitutet/fed24d-the-last-todos-M-Lenvik)
- git clone [repo-url]
- cd [projektmapp]

2. Installera alla beroenden
Kör följande kommando för att installera alla nödvändiga paket enligt package.json:
Projektet är ett vite-projekt. D.v.s. du måste köra:

```shell
npm i
```

3. Starta localhost 
Projektet kör nu lokalt på localhost:5173, beroende på inställningar. Navigera till projektets rotmapp (cd fed24d-the-last-todos-M-Lenvik) och kör npm run dev.

💡 Tips: Se till att du har Node.js och npm installerat innan du börjar.

```shell
npm run dev
```

## Tekniker som använts
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) <br>
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) <br>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <br>
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) <br>
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) <br>
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)


## Uppgiftsbeskrivning
Sidan skall visa ett antal ToDo-punkter. Dessa visas på skärmen som en lista. När man gjort en ToDo kan användaren markera uppgiften som slutförd och uppgiften tas då bort från listan med aktiva ToDo's.

**Uppgiftskrav på G-nivå** <br>
- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar på skärmen och markeras som klar i javascript-listan.
- Ni behöver använda localStorage så att listan inte börjar om från början varje gång sidan används.
- Ni behöver använda er av en komponent.
- Ni behöver använda er av state med en lista med objekt.


**Uppgiftskrav på VG-nivå** <br>
- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk, t.ex. tailwind eller material ui.
- Ni behöver ha minst tre komponenter.
- Ni måste använda Lifting State Up.

### Bilder
  - Bilder på den färdiga webbplatsen

<details>
<summary><strong>Skärmdumpar från webbplatsen</strong></summary>

#### ToDo Appen
![ToDo app med aktiva ToDo's](ToDo_2-1.png) 
![ToDo app där ToDo's är avklarade](ToDo_1-1.png)
</details>


## Slutbetyg
Betyg har ännu ej getts.


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G- och VG-nivån. Funktionaliteten inkluderar skapande, markering och borttagning av ToDos. Prototypens arkitektur visar på en god förståelse för React-koncept som komponenter och 'Lifting State Up'. Appen använder sig framgångsrikt av TailwindCSS för styling. Kodens läsbarhet är bra, med tydliga kommentarer och koncist kodstil. Ytterligare funktioner som sortering och återställning av listan visar på ett extra engagemang för att bygga en komplett applikation.

💡 **Förbättringsförslag:**  
För att göra applikationen ännu mer robust och skalbar kan utvecklaren överväga att lägga till fler unit-tester för att säkerställa att förändringar inte oavsiktligt bryter funktionalitet. Det skulle också vara fördelaktigt att överväga mer avancerad felhantering, särskilt i de delar av koden som interagerar med localStorage och annan I/O. Vidare skulle det vara bra att bryta ut komponenterna ännu mer för att förbättra återanvändbarhet, till exempel separera logik och renderingsdelar i olika komponenter.