import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Libro from '../../app/models/libro.js'

export default class extends BaseSeeder {
  async run() {
    await Libro.createMany([
      {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        editorial: 'Editorial Sudamericana',
        fecha_publicacion: 1967,
      },
      {
        titulo: '1984',
        autor: 'George Orwell',
        editorial: 'Secker & Warburg',
        fecha_publicacion: 1949,
      },
      {
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        editorial: 'Francisco de Robles',
        fecha_publicacion: 1605,
      },
      {
        titulo: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        editorial: 'Editorial Oveja Negra',
        fecha_publicacion: 1985,
      },
      {
        titulo: 'Fahrenheit 451',
        autor: 'Ray Bradbury',
        editorial: 'Ballantine Books',
        fecha_publicacion: 1953,
      },
      {
        titulo: 'El túnel',
        autor: 'Ernesto Sabato',
        editorial: 'Editorial Sur',
        fecha_publicacion: 1948,
      },
      {
        titulo: 'Rayuela',
        autor: 'Julio Cortázar',
        editorial: 'Editorial Sudamericana',
        fecha_publicacion: 1963,
      },
      {
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        editorial: 'Planeta',
        fecha_publicacion: 2001,
      },
      {
        titulo: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        editorial: 'Editorial Oveja Negra',
        fecha_publicacion: 1981,
      },
      {
        titulo: 'El Aleph',
        autor: 'Jorge Luis Borges',
        editorial: 'Emecé Editores',
        fecha_publicacion: 1949,
      },
      {
        titulo: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        editorial: 'Reynal & Hitchcock',
        fecha_publicacion: 1943,
      },
      {
        titulo: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        editorial: 'Editorial Oveja Negra',
        fecha_publicacion: 1985,
      },
      {
        titulo: 'Los detectives salvajes',
        autor: 'Roberto Bolaño',
        editorial: 'Anagrama',
        fecha_publicacion: 1998,
      },
    ])
  }
}
