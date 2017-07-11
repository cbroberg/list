/**
 * Generate random data for use in examples.
 */
import { DESCRIPTIONS } from 'descriptions'

const NAMES = ['Peter Brimer', 'Tera Gaona', 'Kandy Liston', 'Lonna Wrede', 'Kristie Yard', 'Raul Host', 'Yukiko Binger', 'Velvet Natera', 'Donette Ponton', 'Loraine Grim', 'Shyla Mable', 'Marhta Sing', 'Alene Munden', 'Holley Pagel', 'Randell Tolman', 'Wilfred Juneau', 'Naida Madson', 'Marine Amison', 'Glinda Palazzo', 'Lupe Island', 'Cordelia Trotta', 'Samara Berrier', 'Era Stepp', 'Malka Spradlin', 'Edward Haner', 'Clemencia Feather', 'Loretta Rasnake', 'Dana Hasbrouck', 'Sanda Nery', 'Soo Reiling', 'Apolonia Volk', 'Liliana Cacho', 'Angel Couchman', 'Yvonne Adam', 'Jonas Curci', 'Tran Cesar', 'Buddy Panos', 'Rosita Ells', 'Rosalind Tavares', 'Renae Keehn', 'Deandrea Bester', 'Kelvin Lemmon', 'Guadalupe Mccullar', 'Zelma Mayers', 'Laurel Stcyr', 'Edyth Everette', 'Marylin Shevlin', 'Hsiu Blackwelder', 'Mark Ferguson', 'Winford Noggle', 'Shizuko Gilchrist', 'Roslyn Cress', 'Nilsa Lesniak', 'Agustin Grant', 'Earlie Jester', 'Libby Daigle', 'Shanna Maloy', 'Brendan Wilken', 'Windy Knittel', 'Alice Curren', 'Eden Lumsden', 'Klara Morfin', 'Sherryl Noack', 'Gala Munsey', 'Stephani Frew', 'Twana Anthony', 'Mauro Matlock', 'Claudie Meisner', 'Adrienne Petrarca', 'Pearlene Shurtleff', 'Rachelle Piro', 'Louis Cocco', 'Susann Mcsweeney', 'Mandi Kempker', 'Ola Moller', 'Leif Mcgahan', 'Tisha Wurster', 'Hector Pinkett', 'Benita Jemison', 'Kaley Findley', 'Jim Torkelson', 'Freda Okafor', 'Rafaela Markert', 'Stasia Carwile', 'Evia Kahler', 'Rocky Almon', 'Sonja Beals', 'Dee Fomby', 'Damon Eatman', 'Alma Grieve', 'Linsey Bollig', 'Stefan Cloninger', 'Giovanna Blind', 'Myrtis Remy', 'Marguerita Dostal', 'Junior Baranowski', 'Allene Seto', 'Margery Caves', 'Nelly Moudy', 'Felix Sailer']

export function generateRandomList () {
  const list = []

  for (var i = 0; i < 1000; i++) {

    list.push({
      index: i,
      name: NAMES[i % NAMES.length],
      description: DESCRIPTIONS[i % DESCRIPTIONS.length]
    })
  }

  return list
}


