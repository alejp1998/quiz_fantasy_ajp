'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('quizzes', [
      //TEST RDPR NOVIEMBRE 2018
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Una antena genera una densidad	de potencia	de -30 dB(mW/m2) en	la dirección de	máxima radiación a una distancia de 1km. El	campo	eléctrico	generado a dicha distancia cuando se radia por un	lóbulo secundario	de -20 dB	con	respecto al	principal	es:',
          answer: 4,
          answer1: '5,7	dB(V/m)',
          answer2: '22,8	dB(V/m)',
          answer3: '-7,1	dB(V/m)',
          answer4: '-51.2	dB(V/m)',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'El	rendimiento	de	radiación	de	una	antena, cuyo	diagrama	de	radiación	se	ha	medido a	una	distancia	mayor	a	2D²/λ, se	puede	obtener	a	partir	de:',
          answer: 2,
          answer1: 'El área	total	de	la	antena	y	las	pérdidas	de	espacio	libre',
          answer2: 'La densidad	de	potencia	radiada	medida,	la	distancia	de	medida, la	potencia	entregada	a	la	antena y	la	directividad	de	la	antena',
          answer3: 'La	 relación	de	la	densidad	de	potencia	 transmitida	 y	su	 relación	con la	distancia	de	medida',
          answer4: 'La parte	imaginaria	de	la	densidad	de	potencia medida',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'En	condiciones	de	campo	lejano,	siendo la	distancia	de	medida r:',
          answer: 3,
          answer1: 'No	se	pueden	medir	los	nulos	del	diagrama	de	radiación	y	el	error	de	fase	cometido	es	despreciable',
          answer2: 'Se	miden	los	términos	de	potencia	reactiva	de	la	ecuación	del	campo	eléctrico	obtenido	a	partir	del	potencial	vector	magnético	retrasado	A',
          answer3: 'El	diámetro	de	una	antena	de	apertura	circular	debe	ser	menor	que	raíz(rλ/2)',
          answer4: 'Los	 campos	 eléctrico	 y	magnético	 radiados	 por	la	 antena	 poseen	 componente	 en	la	dirección	de	propagación',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'La	fórmula de	Friis:',
          answer: 4,
          answer1: 'Relaciona	exclusivamente	las	pérdidas	de	espacio	libre	con	la	polarización	con	la	que	trabajan	las	antenas	de	un	enlace',
          answer2: 'Relaciona	la	potencia	recibida	con	la	directividad	de	la	antena	transmisora',
          answer3: 'Define	la	potencia	entregada	por	el	transmisor	a	partir	del	coeficiente	de	reflexión	de	la	antena	en	recepción',
          answer4: 'Relaciona	la	potencia	entregada	por	una	antena	al	receptor	con	la	potencia	disponible	en	el	 transmisor,	las	pérdidas	de	espacio	libre,	la	orientación	y	apuntamiento	de	las	antenas,	sus	coeficientes	de	reflexión,	y	sus	ganancias',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Una	antena	omnidireccional:',
          answer: 3,
          answer1: 'Tiene	siempre	una	pureza	de	polarización	circular	igual	a	1	dB',
          answer2: 'Radia	una	intensidad	de	potencia	constante	para	todas	las	direcciones	de	(θ,φ)',
          answer3: 'Radia	un	campo	eléctrico	constante	en	todas	las	direcciones	contenidas	en	un	plano',
          answer4: 'Ninguna	de	las	anteriores',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'En	 el	 vacío,	 una	 antena	 radia	 un	 campo	 eléctrico	 de	 4.5	 dB(V/m),	 que	 equivale	 a	 una	densidad	de	potencia	de:',
          answer: 3,
          answer1: '9,7 mW/m2,',
          answer2: '30,5	mW/m2',
          answer3: '3,7 mW/m2',
          answer4: '5,5	mW/m2',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Cuál	de las	siguientes	afirmaciones	es	cierta:',
          answer: 4,
          answer1: 'La	 directividad se	 puede	 medir	 a	 partir	 del	 ancho	 de	 haz	 a	-2,25	 dB	 en	 los	 planos	principales	sin	importar	el	tipo	de	antena',
          answer2: 'Si	la	relación	axial	es	igual	a	infinito, la	antena	radia	con	polarización	circular',
          answer3: 'La	 potencia	 transmitida	 de	 una	 antena	 será	 siempre	 la	 potencia	 entregada	 por	 el	generador	 sin	 importar	 el	 valor	 de	 la	 impedancia	 de	 la	 antena	 según	 circuito	 de	Thevenin	en	transmisión',
          answer4: 'La	ganancia	de	la	antena	es	menor	o	igual	que	la	directividad	de	la	antena',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Diga	cuál	de	las	siguientes	afirmaciones	es	cierta,	si	se	tiene	un	campo	eléctrico	radiado	por	una	antena	en	campo	lejano	igual	a E(r,t) = (E0/r)*...(como meter formulas)',
          answer: 2,
          answer1: 'El	campo	eléctrico	estará linealmente polarizado	si	b<a',
          answer2: 'El	campo	eléctrico	tendrá	polarización	circular	si	a es	igual	a	b',
          answer3: 'El	campo	eléctrico	tendrá	polarización	circular	para	cualquier	valor	de	b',
          answer4: 'Si a es	 siempre	 negativo,	 entonces	 la	 polarización	 del	 campo	 es	 siempre	 circular	 a	derechas',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Se	reciben	dos	señales	de	la	misma	densidad	de	potencia,	una	procedente	de	una	antena	con	 polarización	 vertical	 pura	 (señal	 deseada)	 y	 otra	 procedente	 de	 una	 antena	 con	polarización	horizontal	y	un	nivel	de	copolar/contrapolar	en	la	dirección	del	enlace	de 35dB (señal	interferente).	La	antena	receptora	es	directiva	y	presenta	un	máximo	hacia	la	antena	que	emite	la	señal	deseada	y	un	nivel	de	20	dB	por	debajo	del	máximo	hacia	la	antena	que	emite	la	señal	interferente',
          answer: 3,
          answer1: 'La	relación	señal a interferencia	será	de 15	dB',
          answer2: 'La	relación	señal a interferencia	será	de 35	dB',
          answer3: 'La	relación	señal a interferencia	será	de 55	dB',
          answer4: 'Depende	de	la	ganancia	de	la	antena	receptora',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'RDPR',
          desc: 'NOV 2018',
          question: 'Cuál	de	los	siguientes	campos	tiene	polarización	lineal',
          answer: 3,
          answer1: '�/⃗(1⃗,2) = 451 �78951 ∙ �8;52 ∙ <�> + ��BC',
          answer2: '�/⃗(1⃗,2) = 45D (0.25�> + �0.25�>) ∙ �8(;52795D)',
          answer3: '�/⃗(1⃗,2) = 45D (�> + 0.25�>) ∙ �8(;52795D)',
          answer4: 'Ninguna	de	las	anteriores',
          createdAt: new Date(),
          updatedAt: new Date()
      },

      //STRA NOVIEMBRE 2017
      {
          course: 3,
          subject: 'STRA',
          desc: 'NOV 2017',
          question: 'Un nivel de 10 dBu medido a la entrada de un sistema de impedancia resistiva 6kΩ equivale a:',
          answer: 3,
          answer1: '-10dBm',
          answer2: '-6dBm',
          answer3: '0dBm',
          answer4: '6dBm',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'STRA',
          desc: 'NOV 2017',
          question: 'Un descodificador de canal Reed-Solomon RS(204,188) presenta a su salida una velocidad binaria de 204kb/s. ¿Qué velocidad tiene a su entrada?',
          answer: 3,
          answer1: '188 kb/s',
          answer2: '204 kb/s',
          answer3: '221,36 kb/s',
          answer4: 'Ninguna de las anteriores es correcta',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'STRA',
          desc: 'NOV 2017',
          question: 'Si la velocidad de fase vf de una señal de banda estrecha es constante en todo su ancho de banda, su velocidad de grupo vg es:',
          answer: 3,
          answer1: '(1/2pi)*vf',
          answer2: 'vf/w',
          answer3: 'vf',
          answer4: 'No se puede calcular',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'STRA',
          desc: 'NOV 2017',
          question: 'Una fibra óptica de salto de indice es monomodo:',
          answer: 3,
          answer1: 'Para cualquier valor de frecuencia',
          answer2: 'Para una frecuencia mayor que un valor determinado',
          answer3: 'Para una frecuencia menor que un valor determinado',
          answer4: 'Para un valor determinado de frecuencia, determinado frecuencia de corte',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          course: 3,
          subject: 'STRA',
          desc: 'NOV 2017',
          question: 'En una fibra óptica monomodo:',
          answer: 4,
          answer1: 'La dispersión por efecto guía-onda compensa siempre la dispersión del material',
          answer2: 'La dispersión por efecto guía-onda es siempre de signo contrario a la dispersión del material',
          answer3: 'La dispersión por modo de polarización compensa siempre la dispersión por efecto guía-onda',
          answer4: 'La dispersión del material depende siempre del índice de refracción del núcleo',
          createdAt: new Date(),
          updatedAt: new Date()
      }

    ]);
  },

  down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
