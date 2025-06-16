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
📌 **Motivering:** Studentens arbete uppfyller inte bara kraven för betyget G, utan uppfyller också samtliga kriterier för betyget VG. Projektet har en hårdkodad lista med todos som kan presenteras, hanteras och markeras som klar. Dessutom tillåter applikationen användare att skapa nya todos och hantera dem med möjlighet att sortera och ändra status. State lifting används för state management, Tailwind CSS används för styling, vilket visar på god förståelse för både kodstruktur och moderna verktyg.

💡 **Förbättringsförslag:**  
Även om applikationen redan är robust, kan följande förbättringar övervägas: 
1. Förbättra UX genom fler transitions och animationer, exempelvis vid borttagning av en todo.
2. Lägg till felhantering för användarinmatning i formuläret så att användaren informeras om fel.
3. Implementera möjligheten att redigera befintliga todos.
4. Små ändringar i kodstil, som att undvika onödiga kommentarer om uppenbara delar av koden vilket gör koden renare och lättare att läsa. 5. Bättre hantering av default-case i sorteringslogiken i sortedTodos konstanten för att säkerställa att oförutsedda sorteringskriterier inte orsakar problem.