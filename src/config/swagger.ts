import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Smart Answers from Your Company’s Documents (Testing Phase)',
      version: '1.0.0',
      description: 'Layanan AI internal untuk menjawab pertanyaan berbasis dokumen perusahaan, seperti absensi, laporan, dan SOP, secara cepat dan akurat.',
    },
  },
  apis: ['./src/routes/**/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express): void {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: `
      .topbar-wrapper a {
        display: none !important;
      }
      .swagger-ui .topbar-wrapper::before {
        content: '';
        background-image: url('/public/Suzuki.svg');
        background-size: contain;
        background-repeat: no-repeat;
        height: 50px;
        width: 160px;
        display: block;
        margin-right: 1rem;
      }
  `,
    customfavIcon: '/public/Suzuki.svg',
    customSiteTitle: 'Suzuki -  Internal RAG API'
  }));
}
