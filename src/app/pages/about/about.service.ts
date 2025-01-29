import { InfoField } from '../../models/infoField.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  private works: InfoField[] = [
    new InfoField('Software Engineer', 'GIM - Go In Motion', 'Jul. 2022 - Oct. 2023', 'https://gim.com.bd/en/'),
    new InfoField('Software Engineer', 'CMED Health', 'Jan. 2022 - Jun. 2022', 'https://cmed.com.bd/'),
    new InfoField('Junior Software Engineer', 'CMED Health', 'Nov. 2019 - Dec. 2021', 'https://cmed.com.bd/'),
    new InfoField('Intern', 'CMED Health', 'July 2019 - Oct. 2019', 'https://cmed.com.bd/'),
  ];

  private education: InfoField[] = [
    new InfoField(
      'Masters in Applied Computer Science',
      'Concordia University, Montreal, Canada',
      'Sep. 2023 - Apr 2025',
      'https://www.concordia.ca/academics/graduate/computer-science-mcompsci-applied.html'
    ),
    new InfoField(
      'Bachelor of Science in Computer Science and Engineering',
      'United International University',
      'Feb. 2015 - Apr 2019',
      'https://cse.uiu.ac.bd/'
    ),
  ];

  private languages: InfoField[] = [
    new InfoField('Bangla', 'native competence', ' ', ' '),
    new InfoField('English', 'Professional competence', ' ', ' ')
  ];

  getEducation(): InfoField[] {
    return this.education;
  }

  getWorks(): InfoField[] {
    return this.works;
  }

  getLanguages(): InfoField[] {
    return this.languages;
  }
}
