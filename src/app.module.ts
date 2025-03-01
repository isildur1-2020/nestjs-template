import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { Company } from './company/entities/company.entity';
import { OfferJobsModule } from './offer-jobs/offer-jobs.module';
import { CountriesModule } from './countries/countries.module';
import { FilesModule } from './files/files.module';
import { SectorsModule } from './sectors/sectors.module';
import { ModalidadesModule } from './modalidades/modalidades.module';
import { TypeOfContractsModule } from './type-of-contracts/type-of-contracts.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { filePath } from './utils/countries';
import { JobOffer } from './offer-jobs/entities/offer-job.entity';
import { LoginModule } from './login/login.module';
import { AuthMiddleware } from './middlewares/bearer';
import { CvModule } from './cv/cv.module';
import { Candidate } from './cv/entities/cv.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', filePath.root),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: 's3Nc8y8!8lz',
      database: 'database_name',
      entities: [Company, JobOffer, Candidate],
      synchronize: true,
    }),
    CompanyModule,
    OfferJobsModule,
    CountriesModule,
    FilesModule,
    SectorsModule,
    ModalidadesModule,
    TypeOfContractsModule,
    LoginModule,
    CvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware) // Aplica el middleware
      .exclude('login')
      .forRoutes('*'); // Se aplica a todas las rutas
  }
}
