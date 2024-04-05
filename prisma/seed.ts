import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '60683071-c16a-486f-bcc2-aadfe23092a9',
      title: 'Next Level Week',
      slug: 'next-level-week',
      details: 'Um evento para devs apaixonados por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})