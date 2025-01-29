import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  githubProjects: any[] = [];

  constructor(private projectsService: ProjectsService) {}

  public ngOnInit() {
    // this.projectsService.getApiProjects().subscribe(
    //   (res) => (this.githubProjects = res),
    //   (err) => console.error(err)
    // );
    this.githubProjects.push(
        {
      html_url: 'https://github.com/Shariar-007/doctor-appointment-booking',
      language:'Angular',
      name:'Doctor Appointment Booking',
      description:'This is a small project in which a patient can select specific time and book an appointment with filling a form with specific information'
    },{
          html_url: 'https://github.com/Shariar-007/Task-management-system/tree/main/task-management-system',
          language:'Angular',
          name:'Task Management System Like Jira',
          description:'This just a small project with some features like JIRA'
        },{
            html_url: 'https://github.com/Shariar-007/Truck-stands-tracking-using-map/tree/master/truck-stands-tracking',
            language:'Angular',
            name:'Truck Stand Tracking Using MAP',
            description:'Using google map tracking a vehicle'
        },{
            html_url: 'https://github.com/Shariar-007/book-store-management',
            language:'Angular',
            name:'Book Store Management System',
            description:'Sore a list of books and mark your favourite books'
        },
       {
          html_url: 'https://github.com/Shariar-007/spring-boot_fundamentals/tree/master/blog-app-apies',
              language:'Java',
          name:'Blog App APIs',
          description:'Having apis of most of the features of blog website'
      },
        {
            html_url: 'https://github.com/Shariar-007/spring-boot_fundamentals/tree/master/examserver',
            language:'Java',
            name:'Online Exam Site',
            description:'Anyone can give subject wise online mcq exam'
        }
        )
  }
}
