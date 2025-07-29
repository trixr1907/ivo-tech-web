/**
 * @module prisma
 * @description Prisma Client Konfiguration für Datenbankzugriff
 */

import { PrismaClient } from '@prisma/client';

/**
 * Erweitert den globalen Namespace um den Prisma Client
 * Verhindert mehrfache Client-Instanzen im Entwicklungsmodus
 */
declare global {
  var prisma: PrismaClient | undefined;
}

/**
 * @description Singleton-Instanz des Prisma Clients
 * Wiederverwendet eine existierende Instanz oder erstellt eine neue
 */
export const prisma = global.prisma || new PrismaClient();

// Im Entwicklungsmodus: Speichere Client-Instanz global für Hot-Reloading
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
