import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

interface Game {
  name: string;
  price: number;
  platform: string;
  image: string;
  description: string;
  rating: number;
  status: string;
}

@Component({
  standalone: false,
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  providers: [MessageService]  // Agregar MessageService
})
export class ExamenComponent {
  games: Game[] = [
    {
      name: 'The Last of Us Part II',
      price: 59.99,
      platform: 'PlayStation 4',
      image: 'https://i.ytimg.com/vi_webp/eOiUtRF8k28/maxresdefault.webp', // Imagen de The Last of Us Part II
      description: 'A gripping story-driven action-adventure game.',
      rating: 5,
      status: 'En Stock'
    },
    {
      name: 'Halo Infinite',
      price: 69.99,
      platform: 'Xbox Series X',
      image: 'https://i.ytimg.com/vi/HZtc5-syeAk/maxresdefault.jpg', // Imagen de Halo Infinite
      description: 'The return of the iconic Halo franchise.',
      rating: 4,
      status: 'Agotado'
    },
    {
      name: 'Cyberpunk 2077',
      price: 49.99,
      platform: 'PC',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg', // Imagen de Cyberpunk 2077
      description: 'An open-world RPG with a dystopian setting.',
      rating: 4,
      status: 'En Stock'
    },
    {
      name: 'Super Mario Odyssey',
      price: 39.99,
      platform: 'Nintendo Switch',
      image: 'https://m.media-amazon.com/images/I/81drkVN7GRL._AC_UF894,1000_QL80_.jpg', // Imagen de Super Mario Odyssey
      description: 'A fun and colorful 3D platformer.',
      rating: 5,
      status: 'En Stock'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  platformOptions = [
    { label: 'PlayStation 4', value: 'PlayStation 4' },
    { label: 'Xbox Series X', value: 'Xbox Series X' },
    { label: 'PC', value: 'PC' },
    { label: 'Nintendo Switch', value: 'Nintendo Switch' }
  ];

  selectedPlatform: string | null = null;
  menuItems: MenuItem[] = [
    { label: 'Inicio', icon: 'pi pi-home' },
    { label: 'Ofertas', icon: 'pi pi-tags' },
    { label: 'Mis Juegos', icon: 'pi pi-shopping-cart' },
    { label: 'Contactar', icon: 'pi pi-envelope' }
  ];

  displayGameDialog: boolean = false;
  selectedGame: Game | null = null;

  selectedRating: number = 0;

  getSeverity(status: string | undefined) {
    if (!status) return 'info';  // Default severity if status is undefined
    switch (status) {
      case 'En Stock': return 'success';
      case 'Agotado': return 'danger';
      default: return 'info';
    }
  }

  showGameDetails(game: Game) {
    this.selectedGame = game;
    this.selectedRating = game.rating;  // Actualizar rating
    this.displayGameDialog = true;
  }

  closeGameDialog() {
    this.displayGameDialog = false;
  }

  // Método para manejar la acción de compra
  constructor(private messageService: MessageService) {}

  onBuyGame(game: Game) {
    this.messageService.add({ severity: 'info', summary: 'Juego añadido al carrito', detail: game.name });
  }
}