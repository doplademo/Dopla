const option1 = {
  id: 1,
  name: "What the doctor ordered",
  description: "Oftan scopolamin 123, vmh. 13,33 € - varastossa",
};

const option2 = {
  id: 2,
  name: "Tosiasiallisesti edullisin tuote",
  description: "Oftan scopolamin 123, vmh. 13,33 € - varastossa",
};

const option3 = {
  id: 3,
  name: "Edullisin saatavilla oleva tuote",
  description: "Oftan scopolamin 123, vmh. 13,33 € - varastossa",
};

export interface OptionsType {
  id: number;
  name: string;
  description: string;
};

export interface PrescriptionType {
  name: string;
  details: string[];
  options: OptionsType[];
  amount: number;
  goodPrice: boolean;
  selectedOption: number;
  cheaperAlternative: boolean;
  selected: boolean;
  id: number;
};

export const prescribedProducts: PrescriptionType[] = [
  {
    id: 1,
    name: "SIMVASTATIN ABC PHARMA 20 MG, OP98",
    details: [
      "Silmätipat, liuos 1 x 10 ml",
      "Voimassa 1.10.2023",
      "Reseptillä: 30 ml",
      "Edellinen toimituspäivämäärä: 15.05.2022",
      "Seuraava kela-korvattava tilauspäivämäärä: 17.07.2022",
    ],
    options: [option1, option2, option3],
    amount: 1,
    goodPrice: true,
    selectedOption: 1,
    cheaperAlternative: false,
    selected: false,
  },
  {
    id: 2,
    name: "Oftan scopolamin 2,5 mg/ml",
    details: [
      "Silmätipat, liuos 1 x 10 ml",
      "Voimassa 1.10.2023",
      "Reseptillä: 30 ml",
      "Edellinen toimituspäivämäärä: 15.05.2022",
      "Seuraava kela-korvattava tilauspäivämäärä: 17.07.2022",
    ],
    options: [option1, option2, option3],
    amount: 1,
    goodPrice: true,
    selectedOption: 2,
    cheaperAlternative: false,
    selected: false,
  },
];
