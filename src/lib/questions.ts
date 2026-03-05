export type Category =
  | 'data_overview'
  | 'processes'
  | 'customers_marketing'
  | 'team_skills'
  | 'security_control';

export type Option = { value: number; label: string };

export type Question = {
  id: string;
  category: Category;
  title: string;
  options: Option[];
};

const fiveScale = (labels: [string, string, string, string, string]): Option[] =>
  labels.map((label, value) => ({ value, label }));

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'data_overview',
    title: 'Kde máte uložené väčšinu firemných údajov?',
    options: fiveScale([
      'v emailoch a dokumentoch',
      'v rôznych systémoch',
      'časť údajov centralizovaná',
      'väčšina údajov v jednom systéme',
      'všetky údaje prepojené',
    ]),
  },
  {
    id: 'q2',
    category: 'data_overview',
    title: 'Ako vznikajú firemné reporty?',
    options: fiveScale(['ručne skladané', 'väčšina manuálne', 'časť automaticky', 'väčšina automaticky', 'úplne automaticky']),
  },
  {
    id: 'q3',
    category: 'data_overview',
    title: 'Ako rýchlo viete získať prehľad o firme?',
    options: fiveScale(['veľmi ťažko', 'pomaly', 'niekedy', 'väčšinou rýchlo', 'okamžite']),
  },
  {
    id: 'q4',
    category: 'processes',
    title: 'Koľko práce robíte manuálne?',
    options: fiveScale(['takmer všetko', 'väčšina', 'asi polovica', 'menšia časť', 'minimum']),
  },
  {
    id: 'q5',
    category: 'processes',
    title: 'Používate nástroje na automatizáciu?',
    options: fiveScale(['vôbec', 'minimálne', 'niekedy', 'často', 'systematicky']),
  },
  {
    id: 'q6',
    category: 'processes',
    title: 'Ako často kopírujete údaje medzi systémami?',
    options: fiveScale(['stále', 'veľmi často', 'niekedy', 'zriedka', 'takmer nikdy']),
  },
  {
    id: 'q7',
    category: 'customers_marketing',
    title: 'Ako tvoríte marketingový obsah?',
    options: fiveScale(['manuálne', 'väčšinou manuálne', 'občas AI', 'často AI', 'AI je štandard']),
  },
  {
    id: 'q8',
    category: 'customers_marketing',
    title: 'Ako komunikujete so zákazníkmi?',
    options: fiveScale(['manuálne', 'väčšinou manuálne', 'čiastočne automatizované', 'väčšinou automatizované', 'automatizované systémy']),
  },
  {
    id: 'q9',
    category: 'customers_marketing',
    title: 'Ako pripravujete obchodné ponuky?',
    options: fiveScale(['od nuly', 'väčšinou od nuly', 'šablóny', 'nástroje pomáhajú', 'automatizované']),
  },
  {
    id: 'q10',
    category: 'team_skills',
    title: 'Ako dobre tím pozná AI nástroje?',
    options: fiveScale(['vôbec', 'minimálne', 'základne', 'dobre', 'pokročilo']),
  },
  {
    id: 'q11',
    category: 'team_skills',
    title: 'Používa tím AI pri práci?',
    options: fiveScale(['nikdy', 'zriedka', 'občas', 'často', 'denne']),
  },
  {
    id: 'q12',
    category: 'team_skills',
    title: 'Zdieľate vo firme AI know-how?',
    options: fiveScale(['vôbec', 'minimálne', 'občas', 'pravidelne', 'systematicky']),
  },
  {
    id: 'q13',
    category: 'security_control',
    title: 'Premýšľali ste nad rizikami AI?',
    options: fiveScale(['vôbec', 'málo', 'čiastočne', 'áno', 'máme pravidlá']),
  },
  {
    id: 'q14',
    category: 'security_control',
    title: 'Máte pravidlá práce s citlivými dátami?',
    options: fiveScale(['nie', 'minimálne', 'základné', 'jasné', 'kontrolované']),
  },
  {
    id: 'q15',
    category: 'security_control',
    title: 'Kontroluje človek výstupy AI?',
    options: fiveScale(['nikdy', 'zriedka', 'niekedy', 'väčšinou', 'vždy']),
  },
];
