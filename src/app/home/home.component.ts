import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
  passing message of array of object to the features component.
   */
  message = [
    {
      marketing: [
        {
          name: 'Marketing Analysis',
          desc: `Far far away, behind the word mountains, 
      far from the countries Vokalia and Consonantia, there live the blind texts.`,
        },
      ],

      digital: [
        {
          name: 'Digital Marketing',
          desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },
      ],
      seo: [
        {
          name: 'SEO and Backlinks',
          desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },
      ],
    },
  ];
  /*
  complete details of all marketing as well as their description and passing array of object to the child component(services).
   */
  service = [
    { img :'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'Design Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    { img : 'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'SEO Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    { img : 'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'Internet Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    { img : 'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'BackLinks Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    { img : 'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'Social Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    { img : 'https://cdn5.vectorstock.com/i/1000x1000/74/14/digital-marketing-graphic-design-vector-6327414.jpg',
      title: 'Design Marketing',
      description:
        'Far far away ,behind the word mountains ,far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ];
}
