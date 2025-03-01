import { v4 as uuid } from 'uuid';
import { Request } from 'express';

export const countries = [
  {
    id: 1,
    nombre: 'Afganistán',
    ciudades: [
      { id: 1, nombre: 'Kabul' },
      { id: 2, nombre: 'Kandahar' },
      { id: 3, nombre: 'Herat' },
      { id: 4, nombre: 'Mazar-e Sarif' },
    ],
  },
  {
    id: 2,
    nombre: 'Albania',
    ciudades: [
      { id: 5, nombre: 'Tirana' },
      { id: 6, nombre: 'Durrës' },
      { id: 7, nombre: 'Vlorë' },
      { id: 8, nombre: 'Shkodër' },
    ],
  },
  {
    id: 3,
    nombre: 'Alemania',
    ciudades: [
      { id: 9, nombre: 'Berlín' },
      { id: 10, nombre: 'Múnich' },
      { id: 11, nombre: 'Hamburgo' },
      { id: 12, nombre: 'Fráncfort' },
      { id: 13, nombre: 'Colonia' },
    ],
  },
  {
    id: 4,
    nombre: 'Andorra',
    ciudades: [
      { id: 14, nombre: 'Andorra la Vieja' },
      { id: 15, nombre: 'Escaldes-Engordany' },
      { id: 16, nombre: 'Encamp' },
    ],
  },
  {
    id: 5,
    nombre: 'Angola',
    ciudades: [
      { id: 17, nombre: 'Luanda' },
      { id: 18, nombre: 'Huambo' },
      { id: 19, nombre: 'Lobito' },
      { id: 20, nombre: 'Benguela' },
    ],
  },
  {
    id: 6,
    nombre: 'Argentina',
    ciudades: [
      { id: 21, nombre: 'Buenos Aires' },
      { id: 22, nombre: 'Córdoba' },
      { id: 23, nombre: 'Rosario' },
      { id: 24, nombre: 'Mendoza' },
      { id: 25, nombre: 'La Plata' },
    ],
  },
  {
    id: 7,
    nombre: 'Australia',
    ciudades: [
      { id: 26, nombre: 'Sídney' },
      { id: 27, nombre: 'Melbourne' },
      { id: 28, nombre: 'Brisbane' },
      { id: 29, nombre: 'Perth' },
      { id: 30, nombre: 'Adelaida' },
    ],
  },
  {
    id: 8,
    nombre: 'Austria',
    ciudades: [
      { id: 31, nombre: 'Viena' },
      { id: 32, nombre: 'Graz' },
      { id: 33, nombre: 'Linz' },
      { id: 34, nombre: 'Salzburgo' },
    ],
  },
  {
    id: 9,
    nombre: 'Bélgica',
    ciudades: [
      { id: 35, nombre: 'Bruselas' },
      { id: 36, nombre: 'Amberes' },
      { id: 37, nombre: 'Gante' },
      { id: 38, nombre: 'Lieja' },
    ],
  },
  {
    id: 10,
    nombre: 'Brasil',
    ciudades: [
      { id: 39, nombre: 'São Paulo' },
      { id: 40, nombre: 'Río de Janeiro' },
      { id: 41, nombre: 'Brasilia' },
      { id: 42, nombre: 'Salvador' },
      { id: 43, nombre: 'Belo Horizonte' },
    ],
  },
  {
    id: 11,
    nombre: 'Bulgaria',
    ciudades: [
      { id: 44, nombre: 'Sofía' },
      { id: 45, nombre: 'Plovdiv' },
      { id: 46, nombre: 'Varna' },
      { id: 47, nombre: 'Burgas' },
    ],
  },
  {
    id: 12,
    nombre: 'Canadá',
    ciudades: [
      { id: 48, nombre: 'Toronto' },
      { id: 49, nombre: 'Vancouver' },
      { id: 50, nombre: 'Montreal' },
      { id: 51, nombre: 'Calgary' },
      { id: 52, nombre: 'Ottawa' },
    ],
  },
  {
    id: 13,
    nombre: 'Chile',
    ciudades: [
      { id: 53, nombre: 'Santiago' },
      { id: 54, nombre: 'Valparaíso' },
      { id: 55, nombre: 'Concepción' },
      { id: 56, nombre: 'La Serena' },
    ],
  },
  {
    id: 14,
    nombre: 'China',
    ciudades: [
      { id: 57, nombre: 'Pekín' },
      { id: 58, nombre: 'Shanghái' },
      { id: 59, nombre: 'Cantón' },
      { id: 60, nombre: 'Shenzhen' },
      { id: 61, nombre: 'Chengdu' },
    ],
  },
  {
    id: 15,
    nombre: 'Colombia',
    ciudades: [
      { id: 62, nombre: 'Bogotá' },
      { id: 63, nombre: 'Medellín' },
      { id: 64, nombre: 'Cali' },
      { id: 65, nombre: 'Barranquilla' },
      { id: 66, nombre: 'Cartagena' },
    ],
  },
];

export const filePath = {
  root: '/static',
  profilePictures: '/profile',
  fingerprints: '/fingerprints',
  temporal: '/tmp',
  templates: '/templates',
};

export const fileNamer = (
  _: Request,
  file: Express.Multer.File,
  cb: (a: null, b: string) => void,
) => {
  const fileExtension = file.mimetype.split('/')[1];
  // @ts-ignore
  cb(null, `${uuid()}.${fileExtension}`);
};

export const sectors = [
  { id: 1, nombre: 'Tecnología' },
  { id: 2, nombre: 'Salud' },
  { id: 3, nombre: 'Finanzas' },
  { id: 4, nombre: 'Educación' },
  { id: 5, nombre: 'Retail y Comercio' },
  { id: 6, nombre: 'Energía y Medio Ambiente' },
  { id: 7, nombre: 'Construcción e Infraestructura' },
  { id: 8, nombre: 'Manufactura e Industria' },
  { id: 9, nombre: 'Alimentación y Agricultura' },
  { id: 10, nombre: 'Turismo y Hostelería' },
  { id: 11, nombre: 'Transporte y Logística' },
  { id: 12, nombre: 'Medios de Comunicación y Entretenimiento' },
  { id: 13, nombre: 'Bienes Raíces e Inmobiliario' },
  { id: 14, nombre: 'Aeroespacial y Defensa' },
  { id: 15, nombre: 'Recursos Humanos y Consultoría' },
  { id: 16, nombre: 'Seguros' },
  { id: 17, nombre: 'Legal y Jurídico' },
  { id: 18, nombre: 'Telecomunicaciones' },
  { id: 19, nombre: 'Minería y Recursos Naturales' },
  { id: 20, nombre: 'Biotecnología' },
];

export const modalidadesTrabajo = [
  { id: 1, nombre: 'Presencial' },
  { id: 2, nombre: 'Remoto' },
  { id: 3, nombre: 'Híbrido' },
  { id: 4, nombre: 'Freelance' },
  { id: 5, nombre: 'Por Proyecto' },
  { id: 6, nombre: 'Tiempo Completo' },
  { id: 7, nombre: 'Medio Tiempo' },
  { id: 8, nombre: 'Temporal' },
  { id: 9, nombre: 'Por Turnos' },
  { id: 10, nombre: 'Prácticas o Pasantías' },
  { id: 11, nombre: 'Autónomo' },
  { id: 12, nombre: 'Voluntariado' },
];

export const typeOfContract = [
  { id: 1, nombre: 'Full Time' },
  { id: 2, nombre: 'Part Time' },
  { id: 3, nombre: 'Internship' },
  { id: 4, nombre: 'Freelance' },
  { id: 5, nombre: 'Contrato Temporal' },
  { id: 6, nombre: 'Contrato Indefinido' },
  { id: 7, nombre: 'Contrato por Proyecto' },
  { id: 8, nombre: 'Contrato por Honorarios' },
  { id: 9, nombre: 'Contrato de Prácticas/Pasantía' },
  { id: 10, nombre: 'Contrato de Formación/Aprendizaje' },
];
