// @flow

const hasSymbol = typeof Symbol === 'function';

export const LanguageType = { 
   RO: hasSymbol? Symbol("Ro") : 1,
   EN: hasSymbol? Symbol("En") : 2
}