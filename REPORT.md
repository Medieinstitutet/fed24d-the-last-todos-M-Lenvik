# 📌 Rättningsrapport – fed24d-the-last-todos-M-Lenvik

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Studentens implementation av Todo-appen uppfyller både G och VG-kraven. Applikationen har en hårdkodad lista med saker att göra och visar dessa i en kontrollerad listaöver dem i en HTML-struktur. Klickhändelsehantering är implementerad för att markera Todo-uppgifterna som klara och därmed hantera deras borttagning. Funktionalitet för att hantera och visa avklarade uppgifter finns också, och de kan återställas till oklarade igen. Formulär finns för att skapa nya Todos och komponentlösningen är förbättrad genom "Lifting State Up" och användning av grafiskt ramverk TailwindCSS. Komponenten använder även flexbox och grid på ett strukturerat sätt. Koden är generellt välorganiserad och strukturerad.

💡 **Förbättringsförslag:**  
Fortsätt förbättra komponentstruktur och tillståndshantering där det behövs för framtida funktioner eller användningsfall. För felsökning och utveckling kan det vara användbart att lägga till mer detaljerade loggmeddelanden, samt att möjligen överväga att använda TypeScript mer konsekvent exempelvis med fler snäva typer för att förbättra typen säkerhetskontroller. För ännu bättre användarupplevelser kan fler animationer och övergångar läggas till. Testning kan också utökas, till exempel med enhetstester för att säkerställa beständighet och stabilitet av funktionaliteten under ökad skalbarhet.