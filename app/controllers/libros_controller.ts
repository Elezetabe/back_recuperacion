import type { HttpContext } from '@adonisjs/core/http'
import Libros from '../models/libro.js'

export default class LibrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    try {
      const libros = await Libros.all()
      return libros;
    } catch (error) {
      console.error('Error fetching libros:', error)
      return { error: 'Failed to fetch libros' }
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    try {
      const data = request.only(['titulo', 'autor', 'editorial', 'fecha_publicacion'])
      const libros = await Libros.create(data)
      return libros
    } catch (error) {
      console.error('Error creating libro:', error)
      return { error: 'Failed to create libro' }
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    try {
      const libros = await Libros.find(params.id)
      return libros
    } catch (error) {
      console.error('Error fetching libro:', error)
      return { error: 'Failed to fetch libro' }
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    try {
      const data = request.only(['titulo', 'autor', 'editorial', 'fecha_publicacion'])
      const libros = await Libros.findOrFail(params.id)
      libros.merge(data)
      await libros.save()
      return libros
    } catch (error) {
      console.error('Error updating libro:', error)
      return { error: 'Failed to update libro' }
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    try {
      const libros = await Libros.findOrFail(params.id)
      await libros.delete()
      return { message: 'Libro deleted successfully' }
    } catch (error) {
      console.error('Error deleting libro:', error)
      return { error: 'Failed to delete libro' }
    }
  }
}
