import { Caveat , Inter  } from 'next/font/google';

// caveat font
export const caveatFont = Caveat({
  subsets: ['latin'], // Specify the subsets you want to use
  weight: ['400', '700'], // Define the weights you want (optional)
  variable: '--font-caveat', // Assign a CSS variable (optional)
});

// inter font
export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});