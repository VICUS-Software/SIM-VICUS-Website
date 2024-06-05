import {
    element,
    feature_container, heading,
    svg,
    text,
} from "./styles.css.ts";
import type { Component } from "solid-js";

export const Features: Component = () => {
    return (
      <div class={feature_container}>
        <div class={element}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={svg}
          >
            <title></title>

            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M9 9h6v6h-6z" />
            <path d="M3 10h2" />
            <path d="M3 14h2" />
            <path d="M10 3v2" />
            <path d="M14 3v2" />
            <path d="M21 10h-2" />
            <path d="M21 14h-2" />
            <path d="M14 21v-2" />
            <path d="M10 21v-2" />
          </svg>
        </div>
        <div class={element} />
        <div class={element} />
        <div class={element}>
          <h2 class={heading}>
            Moderne Solver-Technologie und effizienter Code
          </h2>
          <p class={text}>
            SIM-VICUS ist eine moderne Gebäude- und Netzsimulationssoftware für
            die dynamische Bewertung der Energieeffizienz von Gebäuden und
            Quartieren. Es wurde speziell entwickelt, um besonders komplexe und
            große Gebäude und Netze effizient zu berechnen und die notwendigen
            Datenmengen zu verwalten. Der SIM-VICUS-Solver ist speziell für
            solche Gebäude- und Quartiersimulationsmodelle optimiert und ist
            hinsichtlich der verwendeten numerischen Methoden auf dem neuesten
            Stand der Technik. Die SIM-VICUS-Benutzeroberfläche wurde mit
            ressourcenschonendem C++-Code entwickelt und läuft auch auf 10 Jahre
            alten Notebooks/Macs problemlos.
          </p>
        </div>
        <div class={element}>
          <svg
            class={svg}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <title />

            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>
        </div>
        <div class={element} />

        <div class={element} />
        <div class={element}>
          <h2 class={heading}>Optimierte 3D-Visualisierung</h2>
          <p class={text}>
            In SIM-VICUS erfolgt die gesamte Parametrisierung mit 3D-Gebäude-
            und Netzdaten. Das bedeutet zum einen, dass das gesamte Gebäude &
            Netzwerk grafisch modelliert und auf Basis von 3D-Flächen erstellt
            wird und zum anderen, dass Parameter direkt dem Objekt zugeordnet
            werden (z.B. Fußbodenheizung) und diese auch grafisch durch
            Falschfarben visualisiert werden.
          </p>
        </div>
        <div class={element}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={svg}
          >
            <title />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        </div>

        <div class={element} />
        <div class={element} />

        <div class={element}>
          <h2 class={heading}>Schnelle Modellierung</h2>
          <p class={text}>
            SIM-VICUS ist derzeit in der Lage, IDF- und IFC-Dateien zu
            importieren und aus Architekturmodellen blitzschnell simulierbare
            Modelle zu entwickeln. Darüber hinaus können Räume, Dächer und
            komplexe Formen über umfangreiche Parametrierdialoge erstellt
            werden. Auf diese Weise können dreidimensionale Simulationsmodelle
            in kürzester Zeit erstellt werden und stehen zur weiteren Verwendung
            bereit.
          </p>
        </div>
        <div class={element}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={svg}
          >
            <title></title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div class={element} />
        <div class={element} />

        <div class={element}>
          <h1 class={heading}>Ausgezeichnetes Qualitätsmanagement</h1>
          <p class={text}>
            Mit SIM-VICUS können alle Parameter dynamisch über die 3D-Oberfläche
            dargestellt und überprüft werden. So behält der Anwender den
            Überblick über das Projekt und kann sich von der Korrektheit der
            eingegebenen Daten überzeugen. Dies hebt das Qualitätsmanagement der
            Datenintegrität auf eine neue Ebene.
          </p>
        </div>
        <div class={element}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={svg}
          >
            <title></title>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
          </svg>
        </div>

        <div class={element} />
        <div class={element} />
        <div class={element}>
          <h2 class={heading}>Umfassende Quartiersmodellierung</h2>
          <p class={text}>
            SIM-VICUS unterstützt thermohydraulische Rohrnetze und die
            zugehörigen Netzkomponenten. Es können ganze Nah- und Fernwärmenetze
            modelliert aus GIS-Quellenwerden (und z.B. die notwendige Geometrie
            aus GIS-Quellen importiert werden). Darüber hinaus ist es möglich,
            einzelne detaillierte Gebäudemodelle mit internen hydraulischen
            Netzen (Heizungsanlagen usw.) direkt mit Fernwärmenetzen zu
            verbinden und diese Fernwärme- und Gebäudemodelle gemeinsam zu
            lösen.
          </p>
        </div>

        <div class={element}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={svg}
          >
            <title></title>

            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17l-2 2l2 2" />
            <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
            <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
            <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
            <path d="M15.464 11l2.732 .732l.732 -2.732" />
            <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
          </svg>
        </div>
        <div class={element} />
        <div class={element} />

        <div class={element}>
          <h2 class={heading}>FMI-Kompatibilität</h2>
          <p class={text}>
            Neben internen Anlagen- und Steuerungsmodellen unterstützt SIM-VICUS
            auch die laufzeitgekoppelte Simulation auf Basis des Functional
            Mockup Interface (FMI) Standard 2.0, so dass die Simulation von
            detaillierten Anlagensystemen und Komponenten, die als FMUs von
            spezialisierten Programmen (z.B. Modelica) bereitgestellt werden,
            mit der SIM-VICUS Gebäudesimulation kombiniert werden kann.
          </p>
        </div>
      </div>
    );
};
