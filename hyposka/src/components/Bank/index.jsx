import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Bank = () => {
  return (
    <>
      <main>
        <h1>Banka nebo finanční poradce</h1>
        <p> Blížíme se do finále</p>
        <p>
          Teď už víš, co vzít s sebou. A kam teď vlastně jít? Můžeš jít do banky
          nebo za finančním poradcem.
        </p>
        <h2>Jak vybrat finančního poradce</h2>
        <p>
          Ideálně někdo na koho máš doporučení, že od něj měl hypotéku a je
          spokojený.
        </p>{' '}
        <p>
          Dobrý poradce na hypotéku to pravděpodobně dělá dlouho, protože
          hypotéka je nejsložitější produkt, co banky nabízí. Je
          nepravděpodobné, že někdo po 3 měsících rozumí hypotékám ze všech
          bank. Dá se ale i narazit na čerstvého poradce, který zařizuje sazbu a
          dál se nechá vést a poradit si bankou, i v tomto případě může vše
          dopadnout dobře.{' '}
        </p>
        <p>
          Zároveň ale pozor na poradce, který pracuje pod společností, která je
          dceřinou společností nějaké banky. Tito poradci mohou být motivováni
          sjednávat hypotéky právě u ní. Vlastně ale ani to nemusí být špatně,
          když jim ta banka nabídne nějaké pecka podmínky.{' '}
        </p>
        <p>
          S tím je spojena i provize. Poradce má možnost sjednat hypotéku
          kdekoli, jak tvrdí. Banky mají nastaven provizní systém různě a
          poradce od každé banky dostane jinou provizi. Může se tedy stát, že
          jednu banku před druhou preferovat bude.{' '}
        </p>
        <h3>Výhody a nevýhody finančního poradce</h3>
        <p>Zařídí část věcí za tebe a mohl by pomoci ušetřit nějaký čas</p>
        <p>
          Naopak se ale můžeš setkat s poradcem, který tomu moc nerozumí či
          nestíhá a celý proces zdrží. Bohužel to se nemusíš ani dozvědět,
          protože jednáš jen s ním a on to vždy hodí na banku, že to ještě
          nemají a ne na to, že za týden nebyl schopný tam dodat nějaký papír.
          Taky ta banka něco nově chce a ne že si o to zapomněl říci rovnou.{' '}
        </p>
        <p>
          Finanční poradce bude v úvodu potřebovat vyplnit nějakou žádost o to,
          že pro tebe bude hypotéku vyřizovat. To je v pořádku. Co už ale v
          pořádku není, pokud bude chtít vyplnit žádostí víc, aby mohl obejít
          více bank. Toto většinou končí tím, že hypotéku zadají různé banky,
          někdo ji může žádost rovnou zamítnout, protože uvidí ostatní žádosti.
          Může se i stát, že se hypotéka celá zpracuje a u konce se nahlédne do
          bankovního registru znovu a po zpracování se hypotéka zamítne.
          Samozřejmě když se o hypotéku žádá ve 2 bankách a nakonec se jedna
          vybere, tak to problém být nemusí. Bude ale administrativa navíc,
          protože mohou chtít doložit potvrzení, že nebude poskytnuta i ta druhá
          hypotéka.
        </p>
        <p>
          Zpozorni, když poradce žádost neumí vypsat. Když vytáhne prázdnou
          žádost, doplní tam jen jméno. V bance si to doplní. Toto je přesně ten
          poradce zdržovatel, kterého nepotřebuješ.
        </p>
        <p>
          V kalkulacích doporučuju řešit mimo úrokové sazby i vše ostatní. Mám
          nabídku super úroku, ale v podmínkách to má účet + něco s ním,
          pojištění nebo něco jiného. Zjisti si, co to přesně znamená. Že tam je
          povinnost účtu a zasílání výplaty. To mi asi vadit nebude, protože je
          to pro mě lepší. Jasně můžeš si trvalým příkazem posílat peníze z
          jiného účtu, ale kdyby na tom účtu chybělo 10 Kč, tak ten příkaz
          neodejde a tím neodejde celá splátka. Když jde mzda na účet přímo tam,
          odkud odchází hypotéka, tak se zaplatí celá hypotéka bez 10Kč. Penále
          z 10Kč budou méně než z celé splátky.{' '}
        </p>
        <p>
          Co když není podmínka jen účet, ale nějaká investice někam nebo
          pravidelné platby úvěrovou kartou atd. To někomu vadit nemusí, ale
          někomu to vadit bude, když to bude muset dělat třeba 5 let.
        </p>{' '}
        <p>
          {' '}
          Zvláštní pozornost patří pojištění. Když má smysl, tak pojištění
          hypotéky stejně bude nastaveno, takže žádný problém ne? Když to
          pojištění v jedné bance vyjde na 1000 Kč a to stejné v druhé bance na
          2000, tak už to problém být začíná. Sleva desetinka v úroku najednou
          bude mnohem méně, než to navýšení o litr.
        </p>
        <p>
          A má rada na závěr. Chceš úplnou jistotu. Nech si od banky vyjet
          splátkový plán. To je dokument spolu s nabídkou, kde budou ty platby
          za pojištění atd., který se vyplatí. V něm najdeš, kolik ti bude každý
          měsíc odcházet a hlavně tam najdeš, kolik tam bude k doplacení, až
          uběhne celá fixace. Někdo může použít nějakou upravenou formu výpočtu
          a ač to je o málo, tak za 5 let uvidíš veliký rozdíl. To, že budu
          platit méně a po fixaci tam bude víc než u druhé banky není dobré.
          Polož si splátkové plány vybraných bank vedle sebe a vše schované tam
          uvidíš. To v nabídce nenajdeš.{' '}
        </p>
        <p>
          Taky se vyplatí zbystřit, když se na začátku něco spoří a až následně
          se to do hypotéky vkládá. To většinou znamená, že se úrok bude platit
          z celé výše tak dlouho než dojde k tomu naspoření. Nižší úroková sazba
          se v tomto případě může prodražit. Všechno ale také najdeš ve
          splátkovém plánu.
        </p>
        <h3>Tenký led 🡪Je úrok nižší s nebo bez finančního poradce</h3>
        <p>
          Neznám odpověď. Když půjdeš do banky, tak ti budou tvrdit, pro tebe
          jako našeho VIP extra mistra světa amoleta klienta máme nejlepší
          nabídku, nikam jinam nechoď. Naopak finanční poradce bude tvrdit to
          „jen já ti seženu tu nejlepší hypotéku, protože mám v bance
          předjednanou slevu, kterou ti nikde jinde nedají“. A co je z toho
          pravda? To musíš zjistit. Hypotéka má úrokovou sazbu, která se mění.
          Když ti někdo dá nabídku, tak jeden měsíc vyjde lépe jedna banka a
          druhý jiná. Potřebuješ půjčit 80 % z kupní ceny, vyjde ti nejlépe
          jedna banka. Soused Béďa taky něco kupuje a potřebuje půlku toho, co
          si půjčuješ ty, vyjde mu nejlépe úplně jiná banka. A ta sazba pro
          finančního poradce. Pokud je dobrý a hypoték zpracovává hodně, tak
          může být navázán na nějakou banku, kde mu budou chtít vyjít vstříc. Na
          druhou stranu si ale řekněme, že banka bude poradci z té hypotéky
          vyplácet provizi. To je pravda, dokonce ti už musí říci kolik to je a
          napsat to do dokumentace. Nejde tedy říci, jestli je pravda to nebo
          to. Co ale pravda je, je to, že když jedna banka nějak nestandardně
          vyčnívá s nejnižším úrokem, tak je dobré si to prověřit ze všech
          stran. Banky tvoří sazby dle české národní banky a konkurence. Úroky
          se proto pohybují na nějaké úrovni. Když něco vyčnívá, tak to nemusí
          být kvůli tomu, že to je hodná banka, ale spíš ta, která nemusí hrát
          čistě.
        </p>
        <Link to="/">
          <button>Domů</button>
        </Link>
        <Link to="/tisk">
          <button>Tisk</button>
        </Link>
      </main>
    </>
  );
};
