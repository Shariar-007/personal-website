import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = [
    new Contact('/mohammad-al-shariar', 'https://www.linkedin.com/in/mohammad-al-shariar/', 'linkedin', 'linkedin'),
    new Contact('shariarshohag24@gmail.com', 'https://mail.google.com/', 'email', 'envelope'),
    new Contact('/shariar-007', 'https://github.com/shariar-007', 'github', 'github'),
    new Contact('@shariar214', 'https://twitter.com/shariar214', 'twitter', 'twitter'),
    // new Contact('@dalife', 'https://dalife.itch.io/', 'itch.io', 'gamepad'),
    // new Contact('/dalife', 'https://sketchfab.com/dalife', 'sketchfab', 'paint-brush')
  ];
}
