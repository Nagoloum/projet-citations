// Tableau de citations
const citations = [
" Le s u c c s est la somme de petits efforts r p t s jour a p r s jour ." ,
" Apprendre sans r f l c h i r est vain . R f l c h i r sans apprendre est dangereux ." ,
" La s i m p l i c i t est la sophistication s u p r m e ." ,
" La meilleure f a o n de p r d i r e l ’ avenir , c ’ est de le c r e r ."
];

// Fonction de g n r a t i o n a l a t o i r e
 function citationAleatoire () {
 const index = Math . floor ( Math . random () * citations . length );
 return citations [ index ];
 }

 // Export du module
 module . exports = citationAleatoire ;
