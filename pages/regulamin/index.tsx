import Head from "next/head";
import React from "react";
import styled from "styled-components";
import BreadcrumbsComponent from "../../app/components/breadcrumbs/Breadcrumbs";
import Container from "../../app/styles/shared/Container";

const Heading = styled.h2`
  font-size: 24px;
`;

const Regulations = () => {
  return (
    <>
      <Head>
        <title>Regulamin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Container>
          <h1>Regulamin serwisu internetowego</h1>
          <p>
            Niniejszy Regulamin określa ogólne warunki, zasady oraz sposób
            świadczenia usług drogą elektroniczną przez Administrację serwisu,
            za pośrednictwem serwisu internetowego rankingmyjni.pl (zwanego
            dalej: „Serwisem Internetowym”).
          </p>
          <Heading>§ 1 Definicje</Heading>
          <ol>
            <li>
              Przedsiębiorca - oznacza osobę fizyczną, osobę prawną lub
              jednostkę organizacyjną niebędącą osobą prawną, kt&oacute;rej
              ustawa przyznaje zdolność prawną, prowadzącą we własnym imieniu
              działalność gospodarczą lub zawodową.
            </li>
            <li>
              Regulamin - oznacza niniejszy regulamin Serwisu Internetowego.
            </li>
            <li>
              Strona Internetowa Serwisu - oznacza strony internetowe, pod
              kt&oacute;rymi Usługodawca prowadzi Serwis Internetowy, działające
              w domenie www.rankingmyjni.pl
            </li>
            <li>Usługodawca - oznacza Administrację Serwisu Internetowego.</li>
            <li>
              Użytkownik - oznacza osobę fizyczną dokonującą czynności prawnej
              niezwiązanej bezpośrednio z jej działalnością gospodarczą lub
              zawodową
            </li>
          </ol>
          <Heading>
            § 2 Postanowienia ogólne i korzystanie z Serwisu Internetowego
          </Heading>
          <ol>
            <li>
              Wszelkie prawa do Serwisu Internetowego, w tym majątkowe prawa
              autorskie, prawa własności intelektualnej do jego nazwy, domeny
              internetowej, Strony Internetowej Serwisu, a także do
              wzorc&oacute;w, formularzy, logotyp&oacute;w należą do
              Usługodawcy, a korzystanie z nich może następować wyłącznie w
              spos&oacute;b określony i zgodny z Regulaminem.
            </li>
            <li>
              Usługodawca dołoży starań, aby korzystanie z Serwisu Internetowego
              było możliwe dla Użytkownik&oacute;w Internetu z użyciem
              wszystkich popularnych przeglądarek internetowych, system&oacute;w
              operacyjnych, typ&oacute;w urządzeń oraz typ&oacute;w połączeń
              internetowych. Minimalne wymagania techniczne umożliwiające
              korzystanie ze Strony Internetowej Serwisu to przeglądarka
              internetowa w wersji co najmniej Chrome 39 lub FireFox 34 lub
              nowszych, z włączoną obsługą języka Javascript, akceptująca pliki
              typu &bdquo;cookies&rdquo; oraz łącze internetowe o przepustowości
              co najmniej 512 kbit/s.
            </li>
            <li>
              Usługodawca stosuje mechanizm plik&oacute;w &quot;cookies&quot;,
              kt&oacute;re podczas korzystania przez Użytkownik&oacute;w ze
              Strony Internetowej Serwisu, zapisywane są przez serwer
              Usługodawcy na dysku twardym urządzenia końcowego Użytkownika.
              Stosowanie plik&oacute;w &quot;cookies&quot; ma na celu poprawne
              działanie Strony Internetowej Serwisu na urządzeniach końcowych
              Użytkownik&oacute;w. Mechanizm ten nie niszczy urządzenia
              końcowego Użytkownika oraz nie powoduje zmian konfiguracyjnych w
              urządzeniach końcowych Użytkownik&oacute;w ani w oprogramowaniu
              zainstalowanym na tych urządzeniach. Każdy Użytkownik może
              wyłączyć mechanizm &bdquo;cookies&rdquo; w przeglądarce
              internetowej swojego urządzenia końcowego. Usługodawca wskazuje,
              że wyłączenie &bdquo;cookies&rdquo; może jednak spowodować
              utrudnienia lub uniemożliwić korzystanie ze Strony Internetowej
              Serwisu.
            </li>
            <li>
              Zakazane jest dostarczanie przez Użytkownika treści o charakterze
              bezprawnym oraz wykorzystywanie przez Użytkownika Serwisu
              Internetowego, Strony Internetowej Serwisu lub usług świadczonych
              przez Usługodawcę, w spos&oacute;b sprzeczny z prawem, dobrymi
              obyczajami, naruszający dobra osobiste os&oacute;b trzecich lub
              uzasadnione interesy Usługodawcy.
            </li>
            <li>
              Usługodawca oświadcza, iż publiczny charakter sieci Internet i
              korzystanie z usług świadczonych drogą elektroniczną wiązać może
              się z zagrożeniem pozyskania i modyfikowania danych
              Użytkownik&oacute;w przez osoby nieuprawnione, dlatego Użytkownicy
              powinni stosować właściwe środki techniczne, kt&oacute;re
              zminimalizują wskazane wyżej zagrożenia. W szczeg&oacute;lności
              stosować programy antywirusowe i chroniące tożsamość
              korzystających z sieci Internet.
            </li>
            <li>
              Użytkownik jest uprawniony do korzystania z zasob&oacute;w Serwisu
              Internetowego wyłącznie na własny użytek. Nie jest dopuszczalne
              wykorzystywanie zasob&oacute;w i funkcji Serwisu Internetowego w
              celu prowadzenia przez Użytkownika działalności, kt&oacute;ra
              naruszałaby interes Usługodawcy.
            </li>
          </ol>
          <Heading>§ 3 Usługi</Heading>
          <ol>
            <li>
              Usługodawca świadczy na rzecz Użytkownik&oacute;w, drogą
              elektroniczną 24 godziny na dobę, 7 dni w tygodniu następujące
              usługi nieodpłatne: a. Formularz kontaktowy;
            </li>
            <li>
              Usługodawca zastrzega sobie możliwość wyboru i zmiany rodzaju,
              form, czasu oraz sposobu udzielania dostępu do wybranych
              wymienionych usług, o czym poinformuje Użytkownik&oacute;w w
              spos&oacute;b właściwy dla zmiany Regulaminu.
            </li>
            <li>
              Usługa Formularz kontaktowy polega na wysłaniu za pomocą
              formularza zamieszczonego na Stronie Internetowej Serwisu
              wiadomości do Usługodawcy lub innego Przedsiębiorcy. W celu
              skorzystania z usługi Użytkownik wypełnia formularz udostępniony
              na Stronie Internetowej Serwisu i przesyła wypełniony formularz
              drogą elektroniczną do Usługodawcy lub innego Przedsiębiorcy
              poprzez wyb&oacute;r odpowiedniej funkcji znajdującej się w
              formularzu.
            </li>
            <li>
              Rezygnacja z usługi Formularz kontaktowy możliwa jest w każdej
              chwili i polega na zaprzestaniu wysyłania wiadomości do
              Usługodawcy lub innego Przedsiębiorcy.
            </li>
            <li>
              Usługa Zamieszczenie opinii polega na umożliwieniu Użytkownikowi
              przez Usługodawcę publikacji indywidualnych i subiektywnych
              wypowiedzi dotyczących wizyt&oacute;wek Przedsiębiorc&oacute;w,
              zamieszczonych na Stronie Internetowej Serwisu. W celu
              skorzystania z usługi Użytkownik wypełnia i przesyła dedykowany
              formularz udostępniony przez Usługodawcę przy każdej
              wizyt&oacute;wce Przedsiębiorcy na Stronie Internetowej Serwisu i
              przesyła wypełniony formularz do Usługodawcy, wybierając
              odpowiednie polecenie dostępne w formularzu. Zamieszczenie przez
              Użytkownika opinii wymaga akceptacji Usługodawcy. W przypadku
              braku akceptacji przez Usługodawcę treści opinii zamieszczonej
              przez Użytkownika Usługodawca odmawia jej publikacji na Stronie
              Internetowej Serwisu.
            </li>
            <li>
              Rezygnacja z usługi Zamieszczenie opinii dostępna jest w każdej
              chwili i polega na zaprzestaniu korzystania przez Użytkownika z
              usługi.
            </li>
            <li>
              Usługodawca jest uprawniony do zablokowania dostępu usług, w
              przypadku działania przez Użytkownika na szkodę Usługodawcy lub
              innych Użytkownik&oacute;w, naruszenia przez Użytkownika
              przepis&oacute;w prawa lub postanowień Regulaminu a także, gdy
              zablokowanie dostępu do usług jest uzasadnione względami
              bezpieczeństwa - w szczeg&oacute;lności: przełamywaniem przez
              Użytkownika zabezpieczeń Strony Internetowej Serwisu lub inne
              działania hakerskie. Zablokowanie dostępu do usług z wymienionych
              przyczyn trwa przez okres niezbędny do rozwiązania kwestii
              stanowiącej podstawę zablokowania dostępu do usług.
            </li>
          </ol>
          <Heading>§ 4 Reklamacje</Heading>
          <ol>
            <li>
              Użytkownik może zgłosić Usługodawcy reklamacje w związku z
              korzystaniem z usług świadczonych drogą elektroniczną przez
              Usługodawcę. Reklamacja może być złożona w formie elektronicznej i
              przesłana na adres elektroniczny Usługodawcy. W zgłoszeniu
              reklamacyjnym Użytkownik winien zawrzeć opis zaistniałego
              problemu. Usługodawca niezwłocznie, lecz nie p&oacute;źniej niż w
              terminie 14 dni rozpatruje reklamacje i udziela odpowiedzi na
              adres poczty elektronicznej Użytkownika, podany w zgłoszeniu
              reklamacji.
            </li>
          </ol>
          <Heading>
            § 5 Odpowiedzialność Użytkownika w zakresie zamieszczanych przez
            niego treści
          </Heading>
          <ol>
            <li>
              Zamieszczając treści oraz udostępniając je Użytkownik dokonuje
              dobrowolnego rozpowszechniania treści. Zamieszczane treści nie
              wyrażają pogląd&oacute;w Usługodawcy i nie powinny być utożsamiane
              z jego działalnością. Usługodawca nie jest dostawcą treści, a
              jedynie podmiotem, kt&oacute;ry zapewnia w tym celu odpowiednie
              zasoby teleinformatyczne.
            </li>
            <li>
              Użytkownik oświadcza, że:
              <ul>
                <li>
                  jest uprawniony do korzystania z autorskich praw majątkowych,
                  praw własności przemysłowej i/lub praw pokrewnych do -
                  odpowiednio - utwor&oacute;w, przedmiot&oacute;w praw
                  własności przemysłowej (np. znaki towarowe) i/lub
                  przedmiot&oacute;w praw pokrewnych, kt&oacute;re składają się
                  na zamieszczane przezeń treści;
                </li>
                <li>
                  umieszczenie oraz udostępnienie w ramach usług, o
                  kt&oacute;rych mowa w &sect;3 powyżej, danych osobowych,
                  wizerunku oraz informacji dotyczących os&oacute;b trzecich
                  nastąpiło w spos&oacute;b legalny, dobrowolny oraz za zgodą
                  os&oacute;b, kt&oacute;rych one dotyczą;
                </li>
                <li>
                  wyraża zgodę na wgląd do opublikowanych treści przez innych
                  Użytkownik&oacute;w oraz Usługodawcę;
                </li>
                <li>
                  wyraża zgodę na dokonywanie opracowań utwor&oacute;w w
                  rozumieniu Ustawy o prawie autorskim i prawach pokrewnych.
                </li>
              </ul>
            </li>
            <li>
              Użytkownik nie jest uprawniony do:
              <ul>
                <li>
                  zamieszczania w ramach korzystania z usług, o kt&oacute;rych
                  mowa w &sect;3 powyżej, danych osobowych os&oacute;b trzecich
                  oraz rozpowszechniania wizerunku os&oacute;b trzecich bez
                  wymaganego prawem zezwolenia lub zgody;
                </li>
                <li>
                  zamieszczania w ramach korzystania z usług, o kt&oacute;rych
                  mowa w &sect;3 powyżej treści o charakterze reklamowym i/lub
                  promocyjnym.&nbsp;
                </li>
              </ul>
            </li>
            <li>
              Usługodawca ponosi odpowiedzialność za zamieszczane przez
              Użytkownik&oacute;w treści pod warunkiem otrzymania uprzednio
              powiadomienia zgodnie z &sect;7 Regulaminu.
            </li>
            <li>
              Zabronione jest zamieszczanie przez Użytkownik&oacute;w w ramach
              korzystania z usług, o kt&oacute;rych mowa w &sect;3 powyżej
              treści, kt&oacute;re mogłyby w szczeg&oacute;lności:
              <li>
                zostać zamieszczane w złej wierze, np. z zamiarem naruszenia
                d&oacute;br osobistych os&oacute;b trzecich;
              </li>
              <li>
                naruszać jakiekolwiek prawa os&oacute;b trzecich, w tym prawa
                związane z ochroną praw autorskich i praw pokrewnych, ochroną
                praw własności przemysłowej, tajemnicą przedsiębiorstwa lub
                mające związek ze zobowiązaniami o zachowaniu poufności;
              </li>
              <li>
                posiadać charakter obraźliwy bądź stanowić groźbę skierowaną do
                innych os&oacute;b, zawierać słownictwo naruszające dobre
                obyczaje (np. poprzez użycie wulgaryzm&oacute;w lub określeń
                powszechnie uznawanych za obraźliwe);
              </li>
              <li>pozostawać w sprzeczności z interesem Usługodawcy;</li>
              <li>
                naruszać w inny spos&oacute;b postanowienia Regulaminu, dobre
                obyczaje, przepisy obowiązującego prawa, normy społeczne lub
                obyczajowe.
              </li>
            </li>
            <li>
              W przypadku otrzymania powiadomienia zgodnie z &sect;6 Regulaminu,
              Usługodawca zastrzega sobie prawo do modyfikowania lub usuwania
              treści zamieszczanych przez Użytkownik&oacute;w w ramach
              korzystania przez nich z usług, o kt&oacute;rych mowa w &sect;3, w
              szczeg&oacute;lności w odniesieniu do treści, co do
              kt&oacute;rych, opierając się na doniesieniach os&oacute;b
              trzecich lub odpowiednich organ&oacute;w stwierdzono, że mogą one
              stanowić naruszenie niniejszego Regulaminu lub obowiązujących
              przepis&oacute;w prawa.
            </li>
            <li>
              Użytkownik wyraża zgodę na nieodpłatne wykorzystywanie przez
              Usługodawcę zamieszczonych przez niego treści, jedynie w zakresie
              świadczonych przez Usługodawcę usług w ramach prowadzonego Serwisu
              Internetowego, w szczeg&oacute;lności publikację treści na Stronie
              Internetowej Serwisu.
            </li>
          </ol>
          <Heading>§ 6 Zgłaszanie zagrożenia lub naruszenia praw</Heading>
          <ol>
            <li>
              W przypadku, gdy Użytkownik lub inna osoba lub podmiot uzna, iż
              treść publikowana na Stronie Internetowej Serwisu narusza ich
              prawa, dobra osobiste, dobre obyczaje, uczucia, moralność,
              przekonania, zasady uczciwej konkurencji, know-how, tajemnicę
              chronioną prawem lub na podstawie zobowiązania, powinien
              powiadomić Usługodawcę o potencjalnym naruszeniu.
            </li>
            <li>
              Usługodawca powiadomiony o potencjalnym naruszeniu podejmuje
              niezwłoczne działania mające na celu jego weryfikację, a w
              przypadku potwierdzenia usunięcie ze Strony Internetowej Serwisu
              treści będących przyczyną naruszenia.
            </li>
          </ol>
          <Heading>§ 7 Ochrona danych osobowych</Heading>
          <ol>
            <li>
              Administratorem danych osobowych Użytkownik&oacute;w przekazanych
              Usługodawcy dobrowolnie jest Usługodawca.
            </li>
            <li>
              Usługodawca przetwarza dane osobowe Użytkownik&oacute;w w celu
              świadczenia przez Usługodawcę usług drogą elektroniczną oraz
              innych cel&oacute;w określonych w Regulaminie. Dane są
              przetwarzane wyłącznie na podstawie przepis&oacute;w prawa lub
              zgody wyrażonej przez Użytkownika.
            </li>
            <li>
              Każdy, kto przekaże Usługodawcy swoje dane osobowe, ma prawo
              dostępu do ich treści oraz do ich poprawiania.
            </li>
            <li>
              Usługodawca zapewnia możliwość usunięcia danych osobowych z
              prowadzonego zbioru. Usługodawca może odm&oacute;wić usunięcia
              danych osobowych, jeżeli Użytkownik naruszył obowiązujące przepisy
              prawa, a zachowanie danych osobowych jest niezbędne do wyjaśnienia
              tych okoliczności i ustalenia odpowiedzialności Użytkownika.
            </li>
            <li>
              Usługodawca chroni przekazane mu dane osobowe oraz dokłada
              wszelkich starań w celu zabezpieczenia ich przed nieuprawnionym
              dostępem lub wykorzystaniem. Zbi&oacute;r zgromadzonych danych
              osobowych Użytkownik&oacute;w traktowany jest jako wydzielona baza
              danych, przechowywana na serwerze Usługodawcy, w specjalnej
              strefie bezpieczeństwa, zapewniającej właściwą ochronę.
            </li>
          </ol>
          <Heading>§ 8 Rozwiązanie umowy</Heading>
          <ol>
            <li>
              Zar&oacute;wno Użytkownik, jak i Usługodawca mogą rozwiązać umowę
              o świadczenie usług drogą elektroniczną w każdym czasie i bez
              podania przyczyn, z zastrzeżeniem zachowania praw nabytych przez
              drugą stronę przed rozwiązaniem ww. umowy oraz postanowień
              poniżej.
            </li>
            <li>
              Użytkownik rozwiązuje umowę o świadczenie usługi drogą
              elektroniczną poprzez zgłoszenie stosownego oświadczenia woli,
              przy użyciu dowolnego środka komunikacji na odległość,
              umożliwiającego zapoznanie się Usługodawcy z oświadczeniem woli
              Użytkownika.
            </li>
            <li>
              Usługodawca wypowiada umowę o świadczenie usługi drogą
              elektroniczną poprzez wysłanie do Użytkownika stosownego
              oświadczenia woli na adres poczty elektronicznej podany przez
              Użytkownika.
            </li>
          </ol>
          <Heading>§ 9 Postanowienia końcowe i zmiana Regulaminu</Heading>
          <ol>
            <li>
              Treść niniejszego Regulaminu może zostać utrwalona poprzez
              wydrukowanie, zapisanie na nośniku lub pobranie w każdej chwili ze
              Strony Internetowej Serwisu.
            </li>
            <li>
              Każdy Użytkownik może skorzystać z pozasądowych sposob&oacute;w
              rozpatrywania reklamacji i dochodzenia roszczeń. W tym zakresie
              możliwe jest skorzystanie przez Użytkownika z mediacji. Listy
              stałych mediator&oacute;w oraz istniejących ośrodkach mediacyjnych
              przekazywane są i udostępniane przez Prezes&oacute;w właściwych
              Sąd&oacute;w Okręgowych. Użytkownik będący Konsumentem może
              r&oacute;wnież skorzystać z pozasądowych sposob&oacute;w
              rozpatrywania reklamacji i dochodzenia roszczeń poprzez złożenie
              swojej skargi za pośrednictwem unijnej platformy internetowej ODR,
              dostępnej pod adresem: http://ec.europa.eu/consumers/odr/
            </li>
            <li>
              W przypadku powstania sporu na gruncie zawartej umowy o
              świadczenie usługi drogą elektroniczną, strony będą dążyły do
              rozwiązania sprawy polubownie. Prawem właściwym dla rozstrzygania
              wszelkich spor&oacute;w powstałych na gruncie niniejszego
              Regulaminu jest prawo polskie.
            </li>
            <li>
              Usługodawca zastrzega sobie prawo zmiany niniejszego Regulaminu.
              Wszystkie umowy o świadczenie usługi drogą elektroniczną zawarte
              przed dniem wejścia w życie nowego Regulaminu są realizowane na
              podstawie Regulaminu, kt&oacute;ry obowiązywał w dniu zawarcia
              umowy o świadczenie usługi drogą elektroniczną. Zmiana Regulaminu
              wchodzi w życie w terminie 7 dni od opublikowania na Stronie
              Internetowej Serwisu. Usługodawca poinformuje Użytkownika na 7 dni
              przed wejściem w życie nowego Regulaminu o zmianie Regulaminu za
              pomocą wiadomości przesłanej drogą elektroniczną zawierającej
              odnośnik do tekstu zmienionego Regulaminu. W razie, gdy Użytkownik
              nie akceptuje nowej treści Regulaminu obowiązany jest zawiadomić o
              tym fakcie Usługodawcę, co skutkuje rozwiązaniem umowy zgodnie z
              postanowieniami &sect;8.
            </li>
            <li>Regulamin wchodzi w życie z dniem 01.06.2021 r</li>
          </ol>
        </Container>
      </main>
    </>
  );
};

export default Regulations;
