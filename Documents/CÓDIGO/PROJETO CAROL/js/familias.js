
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;


init();

function init() {
  resize();
  selectElements();
  attachListeners();
}


function selectElements() {
  cards = document.getElementsByClassName('card'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentText = document.getElementById('open-content-text'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}


function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}


function onCardClick(card, i) {

  currentCard = card;

  currentCard.className += ' clicked';

  setTimeout(function() {animateCoverUp(currentCard)}, 500);

  animateOtherCards(currentCard, true);

  openContent.className += ' open';
}


function animateCoverUp(card) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  openContentText.innerHTML = '<h1>'+card.children[2].textContent+'</h1>'+texto+texto2+texto3+texto4+texto5+texto6+texto7+texto8+texto9+texto10+texto11+texto12+texto13+texto14+texto15+texto16+texto17+texto18+texto19+texto20+texto21+texto22+texto23+texto24+texto25+texto26+texto27+texto28+texto29+texto30+texto31+texto32+texto33+texto34+texto35+texto36+texto37+texto38 + texto39 + texto40 + texto41 + texto42  + texto43    ;
  openContentImage.src = card.children[1].src;
  setTimeout(function() {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
 
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  setTimeout(function() {
    openContentText.innerHTML = '';
    openContentImage.src = '';
    cover.style.width = '0px';
    cover.style.height = '0px';
    pageIsOpen = false;
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  cover.style.backgroundColor = cardStyle.backgroundColor;
}

function scaleCoverToFillWindow(cardPosition) {

  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px)';
}

/* When the close is clicked */
function onCloseClick() {
  openContent.className = openContent.className.replace(' open', '');
  animateCoverBack(currentCard);
  animateOtherCards(currentCard, false);
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

function getCardElement(el) {
  if (el.className.indexOf('card ') > -1) return el;
  else return getCardElement(el.parentElement);
}

function resize() {
  if (pageIsOpen) {
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}


var texto = '<p>t teste</p>';
var texto2 = '';
var texto3 = '';
var texto4 = '';
var texto5 = '';
var texto6 = '';
var texto7 = '';
var texto8 = '';
var texto9 = '';
var texto10 = '';
var texto11 = '';
var texto12 = '';
var texto13 = '';
var texto14 = '';
var texto15 = '';
var texto16 = '';
var texto17 = '';
var texto18 = '';
var texto19 = '';
var texto20 = '';
var texto21 = '';
var texto22 = '';
var texto23 = '';
var texto24 = '';
var texto25 = '';
var texto26 = '';
var texto27 = '';
var texto28 = '';
var texto29 = '';
var texto30 = '';
var texto31 = '';
var texto32 = '';
var texto33 = '';
var texto34 = '';
var texto35 = '';
var texto36 = '';
var texto37 = '';
var texto38 = '';
var texto39 = '';
var texto40 = '';
var texto41 = '';
var texto42 = '';
var texto43 = '';



function mudaTexto1(){
  texto = '<h2> Hist??rias ampliadas: Fabiana comemora cada evolu????o da filha como supera????o </h2>';
  texto2 = '<p>Nataly teve uma regress??o no desenvolvimento e sequelas devido ?? doen??a gen??tica e rara</p>';
  texto3 = '<p>Cada gravidez da Fabiana Cristina Lopes foi um momento de tens??o, pois ela desenvolve ecl??mpsia, que s??o convuls??es inexplicadas em mulheres que tem pr??-ecl??mpsia e problemas de hipertens??o. No total, foram cinco gesta????es ???  com dois abortos precoces e tr??s partos prematuros. Nataly Lopes Andrade de Paula foi a quinta beb?? de Fabiana. Al??m de nascer prematura, ela tamb??m ?? portadora de uma doen??a rara chamada Doen??a do Ciclo de Ureia. </p> ';
  texto4 = '<p> O Ciclo da Ureia s??o rea????es enzim??ticas que transformam a am??nia em ur??ia, subst??ncia que ?? eliminada do organismo pela urina. S??o cinco enzimas envolvidas nesse processo e os defeitos que causam a doen??a est??o relacionados a uma delas. Mas todas elas geram uma alta concentra????o de am??nia no organismo, que ?? altamente t??xica para as pessoas. E com isso, os portadores desenvolvem sequelas neurol??gicas e gastrointestinais.   </p>';
  texto5 = '<p>?? uma doen??a gen??tica, no qual o gene deve vir de ambos os pais, que podem ter a doen??a ou ser apenas portadores do gene. Al??m disso, a doen??a pode ser diagnosticada no Teste do Pezinho ampliado, que analisa 53 dist??rbios. ???Eu nunca tinha ouvido falar do Teste do Pezinho Ampliado. Tanto que a Nataly, quando nasceu, fez o primeiro teste, que ?? o normal. Por ela ser prematura, com cinco meses repetiu-se o Teste do Pezinho. Ent??o, na verdade, ela fez dois, mas foram os b??sicos???, afirma Fabiana. A descoberta veio quando participou de um evento do Instituto Vidas Raras, o Vila Rara, realizado no parque Ibirapuera, em S??o Paulo.    </p>';
  texto7 = '<p>  Fabiana comemorou a san????o da lei do Teste do Pezinho Ampliado no SUS. Para ela, foi uma vit??ria e um al??vio saber que outras m??es n??o v??o precisar passar pelas mesmas coisas que ela e a filha: ???Foi uma luta, mas que obteve sucesso. E que outras crian??as, outras Natalys, n??o v??o precisar estar em cima de uma cama para ter os seus direitos garantidos. N??o v??o precisar ter in??meras sequelas para poder ter um atendimento digno???, comemora.     </p>';
  texto8 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/3YovW7QoyyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto9 = '<h2> A doen??a: como a fam??lia descobriu </h2>';
  texto10 = '<p>A fam??lia demorou muito para perceber as sequelas da ca??ula. Nataly apresentou convuls??es j?? duas horas ap??s o nascimento, mas como existe um hist??rico familiar de epilepsia, foi encarada apenas como um epis??dio. Fabiana conta que a menina teve um desenvolvimento precoce: ???Ela andou com nove meses, sem ter engatinhado  antes e com um ano e dois meses saiu das fraldas; com quatro anos foi alfabetizada e com cinco ela falava ingl??s fluentemente???. Mas aos seis anos, Nataly come??ou a regredir.   </p>';
  texto11 = '<p>A menina sempre teve acompanhamento neurol??gico devido ??s convuls??es. Mas o quadro convulsivo dela foi se agravando, conforme ela foi crescendo. Geralmente, a volta do p??s-convulsivo leva em torno de 20 minutos, mas Nataly come??ou a demorar muito para voltar: ???Ela come??ou com um p??s-convulsivo de 15 minutos, depois de 40 minutos, 3 horas, at?? que chegou a ficar num p??s-convulsivo em per??odo de tr??s dias, um pequeno coma???, explica Fabiana.   </p>';
  texto12 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto1/2.jpg" />';
  
  texto13 = '<p style="font-size: 12px;">At?? os seis anos, Nataly apresentava um desenvolvimento normal, mas a regress??o veio r??pida e agressiva (Foto: arquivo pessoal). </p>';
  texto14 = '<p> Aliado a isso, Nataly come??ou a apresentar uma regress??o no desenvolvimento at?? ali conquistado, conforme relembra Fabiana: ???Ela come??ou a apresentar dificuldade para caminhar, dificuldade para ler, para reconhecer, memorizar, foi quando ela come??ou a apresentar os sintomas mais graves???. Mas at?? o primeiro coma, os m??dicos e a fam??lia n??o tinham pensado na possibilidade de ser uma doen??a rara. Foram feitos v??rios diagn??sticos errados, como epilepsia, depois alergia ?? prote??na do leite ou alguma doen??a mitocondrial, at?? finalmente se chegar ao diagn??stico correto.  </p>';
  texto15 = '<p> ???Quando veio o diagn??stico, foi complicado porque voc?? n??o est?? preparada. ?? uma doen??a totalmente desconhecida. Ent??o veio agonia, ansiedade, medo???, compartilha Fabiana. Para ela, foi angustiante tentar entender at?? onde e como a doen??a da filha poderia se desenvolver. </p>';
  texto16 = '<h2>A vida delas hoje  </h2>';
  texto17 = '<p>Hoje com 14 anos, Nataly apresenta v??rias sequelas neurol??gicas e gastrointestinais: ela tem uma atrofia do cerebelo, uma paralisia cerebral n??o completa, um retardo mental leve, escoliose, quadril deslocado, n??o anda, n??o come e n??o consegue fazer as necessidades b??sicas sozinha.   </p>';
  texto18 = '<p> ???N??o h?? tratamento pro Ciclo da Ureia. O que a gente consegue, uma vez que foi detectado e sabendo que ela tem essa defici??ncia, ?? fazer o controle do alimento???, fala Fabiana. Nataly se alimenta com uma f??rmula ?? base da prote??na da soja via sonda, que ?? controlada. Fabiana explica que eles controlam a quantidade a partir do peso, para n??o intoxicar o organismo: ???Se ela engordar muito, o leite fica fraco, ela come??a a absorver a prote??na do pr??prio m??sculo. Se ela perder muito peso, o leite se torna t??xico pra ela???. </p>';
  texto19 = '<p>Mas a partir desse controle e ajuda da fam??lia, Nataly hoje est?? indo bem. Fabiana se emociona e conta que a maior supera????o foi voltar a fazer a Nataly sentar e se comunicar: ???Chegou numa fase em que ela estava t??o intoxicada por n??o ter tido ainda o tratamento certo, que j?? n??o tinha mais controle de bra??os, n??o falava, n??o sustentava mais o pesco??o. E agora ela j?? tem tudo isso. Pra mim ent??o foi a maior vit??ria e evolu????o???.   </p>';
  texto20 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto1/3.jpg" />';
  texto21 = '<p style="font-size: 12px;">Nataly ?? uma menina feliz e que ama cantar (Foto: arquivo pessoal).  </p>';
  texto22 = '<p>Al??m de aprender a controlar a doen??a e sobreviver no dia a dia, Fabiana teve que lidar com custos e burocracias. Uma crian??a com uma doen??a que n??o ?? diagnosticada cedo, desenvolve sequelas e precisa de insumos e terapias para ter boa qualidade de vida. Fabiana exemplifica: ???Se a Nataly tivesse sido diagnosticada quando nasceu, digamos, ela ia parar de andar? N??o. Ela poderia ter uma vida normal e n??o ia precisar de uma cadeira de banho e uma cadeira de rodas. Ela n??o teria essa necessidade. N??o teria a necessidade de uma gastrostomia, n??o ia ter necessidade de uma cama hospitalar, porque ela teria uma vida normal sem sequelas. O que gera os gastos s??o as sequelas, n??o chega nem ser tanto a pr??pria s??ndrome???.   </p>';
  texto23 = '<p>Fabiana conta que teve alguns problemas na rede p??blica em rela????o ?? acompanhamentos m??dicos e tratamentos, em especial com profissionais que n??o est??o capacitados para atender crian??as raras. E tamb??m sofreu com rela????o ?? ajuda do pr??prio governo. Para ela, h?? falhas na assist??ncia e na rede de apoio: ???O governo vai te dar o apoio? Vai porque ele n??o vai querer responder em cima de algo que ele n??o fez. S?? que o apoio que o sistema d??, n??o ?? o aquele que, sinceramente, deveria ter para uma crian??a rara. Ent??o uma crian??a que utiliza insumos, utiliza por 30 dias.  O que o Estado faz? Ele libera para uma semana, quinze dias no m??ximo. Os outros 15 voc?? tem que ir atr??s. Ent??o n??o h?? assist??ncia integral de ponta a ponta???, complementa.  </p>';
  texto24 = '<p>Para ela, fica a esperan??a que com a nova lei, a estrutura toda de sa??de p??blica seja melhorada: ???A crian??a ao nascer, j?? vai entrar no sistema de educa????o, de benef??cio, de mercado de trabalho, como uma crian??a com uma s??ndrome???, finaliza Fabiana.    </p>';
  texto25 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/wVAoi9KU3fQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto26 = '<p> </p>';
  texto27 = '<p> </p>';
  texto28 = '<p> </p>';
  texto29 = '<p> </p>';
  texto30 = '<p> </p>';
  texto31 = '<p> </p>';
  texto32 = '<p> </p>';
  texto33 = '<p> </p>';
  texto34 = '<p> </p>';
  texto35 = '<p> </p>';
  texto36 = '<p> </p>';
  texto37 = '<p> </p>';
  texto38 = '<p> </p>';
  texto39 = '';
  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';





}

function mudaTexto5(){
  texto = '<h2> Hist??rias Ampliadas: Joana perdeu a filha antes de ter um diagn??stico     </h2>';
  texto2 = '<p>Isabella tinha uma doen??a rara e teve s??rios problemas de sa??de      </p>';
  texto3 = '<p> por Carolina Calixto  </p> ';
  texto4 = '<p> O ano de 2020 foi de muitas emo????es na vida de Joana Peceguini Zangrandi e da fam??lia ??? foi quando nasceu a filha, Isabella Peceguini Zangrandi. Os primeiros quatro meses juntos foram muito especiais. Mas a beb?? tinha uma doen??a rara, que demorou a ser diagnosticada, e desenvolveu s??rios problemas de sa??de. Isabella faleceu aos cinco meses e meio, depois de muito lutar. O diagn??stico da doen??a s?? chegou no in??cio de 2021.   </p>';
  texto5 = '<p>  Isabella tinha a chamada Oxida????o dos ??cidos Graxos de Cadeia Longa. ?? um tipo de Dist??rbios da Oxida????o de ??cidos Graxos, um problema metab??lico no qual o organismo n??o consegue decompor gorduras, essenciais para a produ????o de energia para o corpo. A crian??a portadora da doen??a tem uma defici??ncia ou n??o tem as enzimas respons??veis por essa decomposi????o e, com isso, o organismo n??o funciona direito, pela falta de energia, deixando elementos t??xicos se acumularem no corpo. A crian??a n??o pode fazer esfor??o, para n??o gastar energia e acelerar o metabolismo, e nem ficar em jejum, j?? que com isso, o organismo come??a a decompor outras partes essenciais.   </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/2.jpg" />';
  texto8 = '<p style="font-size: 12px;"> A doen??a da Isabella ?? gen??tica e se manifesta quando os pais t??m pelo menos um gene para transmiss??o (Foto: arquivo pessoal).  </p>';
  texto9 = '<p>  A doen??a da Isabella n??o est?? contemplada no Teste do Pezinho oferecido no SUS, apenas no Ampliado, quase nunca informado para as m??es pelos m??dicos. Joana s?? descobriu sobre esse outro exame quando j?? estava buscando o diagn??stico da filha: ???Depois eu conversei com o pediatra e ele falou: ?? muito dif??cil a gente pedir, ainda mais no seu caso que foi uma gesta????o tranquila, um parto tranquilo. Ela n??o tinha ind??cios de ter algum problema. Ent??o ele me pediu desculpas por n??o ter informado???, conta a m??e.   </p>';
  texto10 = '<p> Para ela, a orienta????o dos profissionais da sa??de em rela????o ao p??s-parto ?? falha, j?? que muitas explica????es poderiam ser dadas sobre testes importantes (e n??o s?? as vacinas), al??m das melhores dicas para a m??e e o beb??: ???At?? mesmo orienta????o quanto ?? amamenta????o, no meu caso deu tudo certo. Eu fazia um pouco da minha cabe??a, um pouco eu acho com base no que lia na internet. Depois percebi que o que eu estava fazendo talvez n??o fosse o correto. Ent??o, at?? a orienta????o sobre a amamenta????o acho que ainda ?? um pouco prec??ria???, explica Joana. As consultas de pr??-natal seriam o momento ideal para conversar com as m??es e orient??-las em rela????o ao que esperar nas primeiras etapas da maternidade, segundo o pr??prio <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf"  target="_blank"> Minist??rio da Sa??de. </a>   </p>';
  texto11 = '<h2>A doen??a: da descoberta ?? perda       </h2>';
  texto12 = '<p>  Como a maioria das doen??as raras, os sintomas apareceram e foram notados em Isabella ao longo dos primeiros meses de vida. A gravidez de Joana foi tranquila, ela fez todos os exames e as consultas necess??rias e, por conta da pandemia da Covid-19 e do medo de contamina????o, ela marcou uma ces??rea para evitar um hospital muito cheio: ??? A gente teve um parto mais tranquilo. A Isabella nasceu no dia 15 de maio de 2020. At?? a?? estava correndo tudo bem???,  acrescenta.     </p>';
  texto13 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/3.jpg" />';
  texto14 = '<p style="font-size: 12px;"> Isabella era a primeira filha do casal (Foto: arquivo pessoal).     </p>';
  texto15 = '<p> A <a href="https://www.sbp.com.br/filiada/goias/noticias/noticia/nid/com-que-frequencia-ir-ao-pediatra/"  target="_blank">  orienta????o dos profissionais </a> ?? fazer um acompanhamento bem de perto no primeiro ano de vida. Ap??s o primeiro m??s, recomenda-se a ida mensal a consultas pedi??tricas at?? o sexto m??s e, a partir disso, a cada dois meses. Nessas consultas s??o avaliados o desenvolvimento do rec??m-nascido, sanadas d??vidas dos pais e examina-se como est?? a crian??a. Nas consultas dos dois primeiros meses de Isabella, tudo estava bem.    </p>';
  texto16 = '<p>   Joana conta que estava muito animada para ver o crescimento e evolu????o da filha: ???Como m??e de primeira viagem a gente fica ali esperando todos os passos do desenvolvimento do beb??, e eu estava muito atenta quanto a isso. E tamb??m, numa expectativa, at?? por conta de eu ser educadora f??sica, assim: nossa minha filha antes de um ano vai estar andando. A gente quer muito que o nosso filho seja brilhante???, fala. Mas ela logo notou que Isabella estava com algumas dificuldades de sustenta????o.      </p>';
  texto17 = '<p>  Na consulta dos tr??s meses, comentou com o pediatra a preocupa????o, mas ele explicou que cada crian??a se desenvolve de maneira diferente: algumas com tr??s meses sustentam o corpo, mas outras n??o. Segundo ele, ainda n??o podia ser considerado um atraso e era preciso continuar estimulando a beb?? at?? a pr??xima consulta.  </p>';
  texto18 = '<p>  ???Na consulta de quatro meses a crian??a ainda n??o sustentava o pescocinho, inclusive, come??ou a perder o pouquinho da sustenta????o que tinha. Antes, eu ??s vezes conseguia tirar uma foto dela sentadinha, apoiada, porque ela n??o tinha sustenta????o ainda, mas chegou um momento em que eu colocava Isabella sentada e mesmo com o apoio ela ia [caindo]. Igual uma bonequinha de pano. Ent??o foi nesse momento que a gente come??ou mesmo a se preocupar???, relembra Joana.     </p>';
  texto19 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/4.jpg" />';
  texto20 = '<p style="font-size: 12px;"> Como a doen??a da Isabella impedia a produ????o de energia, ela n??o conseguia sustentar o corpo e ter outros marcos de desenvolvimento (Foto: arquivo pessoal).  </p>';
  texto21 = '<p> A investiga????o foi muito longa. A princ??pio, o pediatra tentou n??o preocupar Joana. Foram realizados exames de sangue b??sicos, a fim de descartar doen??as mais comuns, mas eles voltaram normais. Foi nesse momento que o m??dico pediu o Teste do Pezinho Ampliado e um teste de cari??tipo, que estuda os cromossomos e pode indicar alguma altera????o num??rica ou estrutural (mas n??o altera????o no gene).      </p>';
  texto22 = '<p> Mas no dia da realiza????o dos exames, Isabella n??o estava bem. ???Ela estava muito molinha, n??o mamava direito. Se voc?? ia colocar ela na cama, ela resmungava. Se ia tirar da cama e pegar no colo, ela resmungava. Ent??o, aparentemente, ela estava com dor tamb??m???, relembra Joana. Durante a noite,  a m??e levou a filha ao pronto-socorro e l?? o diagn??stico foi de hipoglicemia, ou seja, o a????car no sangue estava baix??ssimo. ???E ali a gente j?? come??a a ficar apavorada, sem saber o que est?? acontecendo???, relata.   </p>';
  texto23 = '<p> Por conta da pandemia, Joana tinha se dirigido a um hospital pequeno de Guaratinguet?? (SP), mas a filha teve que ser transferida de ambul??ncia a outro hospital, com melhor estrutura.  ???Quando chegamos, era o pediatra dela quem estava de plant??o. E como ele j?? sabia do hist??rico de investiga????o, fez ali tamb??m os atendimentos, colheu mais exame de sangue, e a interna????o come??ou a partir desse dia???, conta. Isabella ficou internada durante 15 dias no hospital.      </p>';
  texto24 = '<p> L?? foram realizados exames diariamente e, em um desses, descobriram que o f??gado da crian??a estava aumentado, o que gerou grande preocupa????o. Mas al??m das altera????es, os exames n??o permitiam um diagn??stico. Joana explica que como a cidade ?? pequena, n??o existem muitos recursos e os m??dicos n??o s??o muito especializados: ???Extremamente perdidos, os m??dicos n??o sabiam o que fazer. N??o entendiam o que estava acontecendo, por conta de ser uma doen??a rara. O pediatra fez tudo o que podia ??? mas chegou o momento que n??o tinha mais para onde correr, n??o sabiam diagnosticar???.   </p>';
  texto25 = '<p>  Desse modo, m??e e filha foram transferidas para a Santa Casa, em S??o Paulo, onde ficaram internadas por um m??s e meio, realizando mais exames, mas sem chegar a nenhum diagn??stico. ???Eu ficava l??, presa no hospital, tinha dia que ela estava super bem, dava vontade de fugir do hospital porque parecia que ela n??o tinha nada???, conta Joana. Receberam alta e voltaram para casa at?? que sa??ssem novos resultados, mas Isabella teve outra piora com uma infec????o e foi internada novamente.      </p>';
 
  texto26 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/5.jpg" />'
  texto27 = '<p style="font-size: 12px;"> O Teste do Pezinho Ampliado foi realizado alguns meses ap??s o nascimento, mas o resultado demorou muito tempo para sair (Foto: arquivo pessoal).   </p>';
  texto28 = '<p> Na nova interna????o, os m??dicos decidiram fazer uma bi??psia do f??gado para ver se ajudava no diagn??stico. ???E a?? mais uma vez, no dia de fazer a bi??psia, ela n??o estava bem, muito molinha, muito reclamona e desci pra bi??psia apavorada ???  como iam sedar minha filha se ela j?? estava n??o sei explicar, muito molinha, muito sonolenta, fraquinha???, lembra Joana. E, nesse dia, Isabella foi para a UTI entubada e, ap??s tr??s dias, faleceu. ???Quando ela faleceu, infelizmente, n??o ?? f??cil falar, mas de certa forma foi at?? um al??vio. Porque acabou o sofrimento dela???, compartilha Joana.   </p>';
 
 //video
  texto29 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/Oh8mJ-11Jtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto30 = '<p>  Isabella faleceu sem ter um diagn??stico, que s?? chegou no in??cio deste ano, ap??s muita insist??ncia dos pais, que tiveram que fazer um exame chamado de exoma, que analisa os genes e identifica doen??as gen??ticas, a partir do sangue utilizado no Teste do Pezinho.        </p>';
  texto31 = '<h2>  O depois     </h2>';
  texto32 = '<p>  ???A gente acaba pensando nos ???e se???. Culpar ningu??m, n??o culpo, mas me vejo ??s vezes???se tivesse feito coisas diferentes. Mas acaba que a?? junta um pouco de viv??ncia pessoal e f?? tamb??m???, divide Joana. Algumas quest??es agora passam na cabe??a da m??e, como a demora no resultado do teste do pezinho ampliado, o fato de n??o ter plano de sa??de e ter ido a um hospital ao inv??s de outro.   </p>';
  texto33 = '<p> A dor pela perda da filha vai ficar com a fam??lia para sempre, mas a partir da experi??ncia vivida, Joana decidiu que iria lutar para que outras m??es conhecessem o Teste do Pezinho Ampliado e divulgaria a campanha: ???No hospital, no per??odo de investiga????o, eu estava no lact??rio e vi na televis??o uma reportagem de uma m??e que tem um filho com sequelas, porque n??o descobriu a doen??a dele antes, n???. E da?? eu decidi lutar por essa causa, pra mostrar para as pessoas a import??ncia deste teste. Porque ele ?? realmente importante. O diagn??stico precoce pode salvar vidas. Talvez n??o pudesse ter salvo a vida da minha filha, mas a gente v?? que pode salvar muitas outras crian??as???.   </p>';
  texto34 = '  <img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto2/6.jpg" />';

  texto35 = '<p style="font-size: 12px;"> Joana mandou a hist??ria dela e da filha para uma exposi????o feita como campanha pelo Instituto Vidas Raras (Foto: arquivo pessoal).     </p>';
  texto36 = '<p>  Alguns meses ap??s a morte da filha, Joana se reuniu com algumas m??es da cidade e divulgou a campanha feita pelo Instituto Vidas Raras e a import??ncia do teste. ???Fiquei muito feliz do teste ampliado ir pro SUS, porque n??o ?? s?? quem tem dinheiro que deve ter a possibilidade de fazer esse exame. Todo mundo deve???, comenta sobre a san????o da lei que ampliou o Teste do Pezinho no SUS.   </p>';
  texto37 = '<p>      </p>';
  texto38 = '<p>      </p>';
  texto39 = '<p>      </p>';

  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';

}


function mudaTexto2(){
  texto = '<h2> Hist??rias ampliadas: a descoberta da doen??a rara do Miguel transformou a rotina da m??e e de toda a fam??lia      </h2>';
  texto2 = '<p>   Lidar com uma crian??a portadora de um problema gen??tico que deixa sequelas exige muito cuidado e aten????o     </p>';
  texto3 = '<p>  por Carolina Calixto      </p> ';
  texto4 = '<p> A descoberta da gravidez chegou como uma surpresa na vida da Caroline Granzotto e da fam??lia. Embora inesperada, foi muito celebrada. Quando nasceu, Miguel realizou todos os exames necess??rios, mas uma falha na comunica????o mudou a vida dele e da fam??lia. E com isso, uma nova realidade teve que ser criada.      </p>';
  texto5 = '<p> Miguel tem uma doen??a rara, chamada de Acid??ria Glut??rica tipo I, doen??a gen??tica na qual o organismo, pela falta de uma enzima, n??o transforma os amino??cidos em energia, o que deixa um ac??mulo t??xico e gera uma crise metab??lica aguda, deixando sequelas, principalmente motoras. A doen??a ?? uma das 53 triadas no Teste do Pezinho Ampliado, que ?? pouco divulgado na maioria das maternidades do pa??s. Caroline conta que informaram a ela sobre a exist??ncia dos testes do Pezinho b??sico, da Orelhinha e sobre as vacinas na cl??nica onde se consultou: ???Mas ningu??m me falou sobre um teste complementar ou alguma coisa desse tipo???, esclarece. Ela s?? ficou sabendo sobre outro tipo de teste quando descobriu a doen??a do filho.      </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/2.jpg" />';
  texto8 = '<p style="font-size: 12px;"> ???Eu n??o me permito ficar revoltada com as coisas porque o Miguel ?? muito lindo???, fala Caroline. (Foto: arquivo pessoal).     </p>';
  texto9 = '<p> Recentemente, o Governo Federal sancionou a <a href="https://www.in.gov.br/web/dou/-/lei-n-14.154-de-26-de-maio-de-2021-322209993"  target="_blank"> Lei n?? 14.154</a>, que amplia o Teste do Pezinho oferecido na rede p??blica de seis para mais de  50 doen??as triadas. Agora o exame passar?? a abranger 14 grupos de doen??as. A amplia????o acontecer?? de maneira escalonada e deve come??ar ap??s um ano da publica????o da Lei.  </p>';
  //VIDEO
  texto10 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/6mzcrmRkXTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto11 = '<h2>  A revela????o da doen??a e a mudan??a de vida    </h2>';
  texto12 = '<p>  ???Eu tive uma gravidez tranquila, pude fazer exerc??cio, trabalhei at?? dois dias antes de ganhar o Miguel. N??o tive nenhum problema durante e foi um parto bem tranquilo???, relembra a m??e, Caroline Granzotto. Miguel nasceu de ces??rea, com 39 semanas e 5 dias, e era um beb?? saud??vel ???  os m??dicos brincaram que ele era um beb?? grand??o. Tudo aconteceu do jeito certo, Miguel mamou durante seis meses exclusivamente leite materno e era um beb?? muito alegre.   </p>';
  texto13 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/3.jpg" />';
  texto14 = '<p style="font-size: 12px;">  Na foto, Miguel e a m??e, Caroline (Foto: arquivo pessoal)    </p>';
  texto15 = '<p>A av?? foi a primeira pessoa a perceber alguns estranhamentos no desenvolvimento de Miguel. Enquanto ele tentava pegar os brinquedos, chupava o dedo e balbuciava alguns gritinhos, outros marcos comuns para a idade n??o eram alcan??ados, como explica a m??e: ???Aos sete meses, minha m??e come??ou a pegar no meu p??, falando que ele j?? tinha que estar sentando sozinho, querendo engatinhar e o Miguel n??o queria???. Desse modo, ao questionar a pediatra, ela informou dizendo que era normal ele ficar um pouco mais pregui??oso, j?? que era um beb?? grande. Na ??poca, Miguel pesava 10,8 quilogramas. Mas para acalmar a fam??lia e estimular os movimentos do beb??, indicou fazer fisioterapia.      </p>';
  texto16 = '<p> Mas ap??s um m??s, a fisioterapeuta informou que, embora o Miguel fosse uma crian??a esperta e que compreendesse tudo, realmente havia um atraso no desenvolvimento e foi indicada a ida a uma neurologista. Carol conta que na hora j?? ficou assustada e foi se consultar com a m??dica: ???A gente fez a consulta, ela fez alguns exames no Miguel, de colocar a toalhinha no rosto e o Miguel tentar tirar. De um lado ele tirou, do outro n??o tirou. Ela falou que era um reflexo normal para uma crian??a de cinco meses ter???, explica. Miguel j?? estava com quase nove meses. E assim iniciou-se o caminho para diagnosticar a doen??a.  </p>';
  texto17 = '<p>O primeiro grande sinal foi descoberto a partir de exames de resson??ncia magn??tica. A pediatra descobriu que Miguel tinha les??es no c??rebro. O resultado foi desconhecido para a equipe m??dica consultada, pois nunca tinham testemunhado uma les??o igual a do menino: ???Lembro que a pediatra falou: a gente achou no Google um artigo de Portugal, que diz que ?? Acid??ria Glut??rica. A imagem do c??rebro do Miguel parece essa. Mas a gente n??o sabe. Se for essa, voc?? precisa mudar a alimenta????o do Miguel com urg??ncia???, narra Caroline.   </p>';
  texto18 = '<p>Como era uma doen??a que os m??dicos n??o conheciam, Miguel e a fam??lia foram encaminhados de Londrina, onde residiam, para Curitiba, onde, no Hospital Pequeno Pr??ncipe, fizeram novos exames para ter a certeza do diagn??stico, que at?? ent??o era uma hip??tese. Mas n??o foi uma experi??ncia r??pida e tranquila, ocorreram diverg??ncias de um m??dico para outro.   </p>';
  texto19 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/4.jpg" />';
  texto20 = '<p style="font-size: 12px;">Miguel chegou a ficar internado no Hospital em meio aos exames para descobrir a doen??a (Foto: arquivo pessoal).  </p>';
  texto21 = '<p>J?? em Curitiba, a nova pediatra analisou Miguel e viu que ele era um beb?? grande e gordo, o que fugia do padr??o da Acid??ria Glut??rica. ???Eles come??aram a desconfiar de outras coisas, me deram outros diagn??sticos. E come??aram a pesquisar. Passamos por cardiologista, oftalmologista, todos os m??dicos que voc?? imaginar???, compartilha Caroline. Durante uma semana no hospital diversos exames foram realizados, como um painel de erros inatos do metabolismo, que analisa genes relacionados a aproximadamente 700 dist??rbios que causam doen??as metab??licas. Erros inatos do metabolismo s??o doen??as raras com origem gen??tica e est??o relacionados com algum defeito de enzima, que podem causar problemas no funcionamento geral do organismo.   </p>';
  texto22 = '<p>Finalmente, com esse ??ltimo exame, a fam??lia teve a certeza do diagn??stico. Era mesmo Acid??ria Glut??rica tipo I. Caroline expressa que foi desesperador descobrir a les??o e o diagn??stico: ???Saber que teu filho tem uma les??o, descobrir que a les??o foi causada por falta de informa????o e pela comida, sendo que voc?? acha que voc?? estava fazendo o seu melhor. ?? uma situa????o que a gente tem que lidar todos os dias e que tem que trabalhar, com a cabe??a e com o cora????o???.   </p>';
  texto23 = '<p>A partir do diagn??stico, Miguel, Caroline e a fam??lia precisaram se readaptar: ???A gente tem essa situa????o e eu falo assim: o que a gente puder, a gente vai fazer para que ele seja o melhor. Mas n??o ?? f??cil???, comenta.   </p>';
  texto24 = '<img style="width: 60%; height: 80%;  margin-left:17.5%"  src="../assets/familia/texto3/5.jpg" />';
  texto25 = '<p style="font-size: 12px;">  Miguel ?? uma crian??a muito risonha e feliz. (Foto: arquivo pessoal).     </p>';
  texto26 = '<h2>Crian??a com Acid??ria Glut??rica: o tratamento   </h2>';
  texto27 = '<p> Hoje, Miguel ?? cadeirante, n??o fala, n??o anda e precisa de ajuda para se apoiar. Caroline conta que, quando descobriu sobre a doen??a, sonhava em ver o filho andar. Agora, mesmo tendo que aceitar a situa????o da cadeira ??? o que n??o tem sido uma tarefa f??cil, ela quer ver o filho falar: ???Lembro at?? hoje que a gente sempre perguntava muito se ele ia andar. Hoje, brinco que a coisa que eu mais quero ?? que ele falasse. O andar eu j?? nem acho importante. Porque se ele n??o fala, ?? a minha maior agonia, n??o sei o que ele t?? pensando, o que ele t?? querendo, a gente fica tentando adivinhar???, conta.  </p>';
  texto28 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto3/6.jpg" />';
  texto29 = '<p style="font-size: 12px;">Um dos maiores desafios da m??e tem sido aceitar a cadeira de rodas e encontrar acessibilidade nos lugares. (Foto: arquivo pessoal).   </p>';
  texto30 = '<p> Com o diagn??stico firmado e as sequelas, novas rotinas come??aram a ser seguidas e os comportamentos tiveram que mudar. A partir das consultas, descobriram que a restri????o dos amino??cidos do Miguel s??o duas: lisina, relacionada com o crescimento da crian??a, que ?? encontrada em carnes e leites; e triptofano, que regula o sono e ajuda a formar o horm??nio da serotonina, encontrado no queijo, ovo, banana, entre outros. Como s??o amino??cidos adquiridos atrav??s dos alimentos, Miguel precisa de uma dieta r??gida para conseguir ser saud??vel. ????? uma linha muito t??nue, se voc?? der muito voc?? intoxica, se voc?? der pouco ele n??o dorme ou n??o cresce. O exame para voc?? ver se est?? intoxicado ou n??o, demora 30 dias para ficar pronto aqui no Brasil. E ?? uma mentira, porque quando fica pronto j?? n??o ?? o que est?? l?? no organismo???, explica Caroline.   </p>';
  texto31 = '<p>Miguel ?? praticamente uma crian??a vegana. Mas como j?? est?? com 5 anos, tem conseguido se manter saud??vel, com direito a um ovo por semana, al??m de feij??o com caldo de carne. Mas tudo ?? pesado e analisado a cada refei????o. Al??m disso, ele toma um complemento de amino??cidos para conseguir que o organismo seja regulado. Nos ??ltimos meses, Miguel parou de tomar o leite GlutarAde, que complementava a alimenta????o, pois j?? atingiu uma idade em que o leite n??o ?? mais necess??rio. A fam??lia tinha que trazer o leite dos Estados Unidos, pois n??o ?? vendido no Brasil ou fornecido pelo SUS.       </p>';
  texto32 = '<p>Aliado a isso, Miguel faz terapias. Nos primeiros anos, chegou a fazer mais de dez horas por semana, duas vezes ao dia. Hoje em dia, ele faz seis horas de terapia por semana: ???A gente trabalha com o Miguel nas fisioterapias desde que ele tem oito meses para que ele tente se desenvolver e criar atalhos. A gente acredita na neuroplasticidade [do c??rebro]???, relata Caroline.    </p>';
  
  //video
  texto33 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/d4rQt-blv8I?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto34 = '<p style="font-size: 12px;"> Miguel faz terapias que buscam diversificar os m??todos existentes para estar sempre estimulando o c??rebro (V??deo: arquivo pessoal).     </p>';
  texto35 = '<p> Para dar conta da rotina, a fam??lia faz escalas. Enquanto Caroline est?? no trabalho, Miguel fica com a av??. Nas segundas e sextas-feira, a crian??a faz fisioterapia de manh??, enquanto nas ter??as e quintas-feiras, ?? noite. O ??nico dia livre ?? na quarta, dia destinado ?? fonoaudiologia, mas a fam??lia espera a libera????o pelo plano de sa??de.   </p>';
  
  //video2
  texto36 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/CoEJ0vARPV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto37 = '<p style="font-size: 12px;">  Como a doen??a do Miguel n??o tem cura, o tratamento ?? atrav??s de fisioterapia e dieta pelo resto da vida. (V??deo: arquivo pessoal).    </p>';
  texto38 = '<p> Antes da pandemia, Miguel tamb??m come??ou a ir para a escola e descobriu um novo mundo, onde existiam crian??as como ele, o que ajudou na evolu????o. ???A escola para o Miguel foi uma coisa muito boa. Confesso que n??o sabia que ele gostava de beterraba, porque eu n??o gosto ent??o eu n??o fa??o, mas ele descobriu l??. Tamb??m a professora foi dar bolacha para ele na m??o, e eu at?? fui l?? para aprender como ela fazia, porque eu ficava com receio???, compartilha Caroline. Mas, com a pandemia, Miguel deu um tempo da escola.   </p>';
  texto39 = '<p> Uma grande dificuldade encontrada ?? conciliar os gastos m??dicos, entre as consultas particulares e aquelas bancadas pelo plano de sa??de, tentando reembolso quando d??. Al??m disso, os acess??rios que auxiliam o dia a dia do Miguel tamb??m s??o caros: ???Eu tenho que comprar uma ??rtese, por exemplo, para a perna dele, que vai servir por um ano, porque ele cresce. Custa 950 reais. A??, uma tala extensora, mais 950, mais o sapatinho, voc?? precisa de no m??nimo dois, uma sand??lia e um sapato, que custa 300 e pouco. Ent??o o custo de uma crian??a rara ?? muito caro para a fam??lia???, exemplifica.      </p>';
  texto40 = '<h2> A sa??de mental das fam??lias     </h2>';
  texto41 = '<p> Muitos pais de crian??as portadoras de doen??as sentem culpa, mesmo quando eles n??o t??m rela????o direta com a doen??a. ???Voc?? come??a a ter as culpas n??, que n??o ?? sua culpa, mas isso ?? uma coisa que eu ainda tenho que trabalhar constantemente. Eu fa??o an??lise hoje, totalmente voltada para isso, porque tenho um sentimento de culpa ??? ??s vezes eu sonho, ??s vezes me martirizo???, exp??e Caroline.      </p>';
  texto42 = '<p> A rede de apoio nesses casos tem um papel importante para ouvir as m??es e permitir um espa??o de acolhimento. Caroline tem, al??m da fam??lia, a ajuda de um grupo de pais e m??es de crian??as portadoras de Acid??ria Glut??rica, de que participa no Whatsapp. L?? eles acolhem uns aos outros e se ajudam. Uma dica que Caroline divide com todos os pais ?? a necessidade de procurar an??lise ou outro apoio psicol??gico, para ajudar a entender a realidade e os sentimentos. ???Eu procurei para me reorganizar: quem eu era, o que eu estava fazendo. E acho muito necess??rio. Sempre digo que a pr??tica do Pilates e a an??lise deveriam ser obrigat??rios para todo mundo: que ajudar na postura, para poder pegar a crian??a; para voc?? sentar melhor no seu trabalho e aprender a respirar. E para voc?? se entender melhor, se organizar, entender o que est?? acontecendo em volta???, explica Caroline.   </p>'
  texto43 = '';


}


function mudaTexto3(){
  texto = '<h2> Hist??rias ampliadas: Nath??lia e Marlon realizam eventos de arrecada????o para manter a qualidade de vida do filho </h2>';
  texto2 = '<p> Matias tem uma doen??a rara e necessita de diversas terapias, equipamentos e alimenta????o para viver bem </p>';
  texto3 = '<p> por Carolina Calixto </p> ';
  texto4 = '<p> A vida do casal, Nath??lia e Marlon da Silva, sofreu uma reviravolta ap??s o nascimento do filho Matias, diagnosticado com uma doen??a gen??tica rara, a Acid??ria Glut??rica tipo I. Eles tiveram que entender e aceitar a nova situa????o e aprender a se virar para bancar os custos e melhorar a qualidade de vida do filho, j?? que a descoberta veio tarde e as sequelas j?? tinham aparecido. Hoje, com quatro anos, Matias apresenta sequelas motoras e precisa de diversas terapias.     </p>';
  texto5 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/2.jpg" />';
  texto7 = '<p style="font-size: 12px;">  Com dois anos de idade, Matias precisou colocar a gastrostomia para conseguir se manter saud??vel  (Foto: Instagram Raro Matias | arquivo pessoal)    </p>';
  texto8 = '<h2>  As dificuldades na gravidez    </h2>';
  texto9 = '<p> No come??o, a gravidez da Nath??lia foi tranquila. Mas quando estava com 35 semanas teve dores fortes e foi para o hospital, onde precisou ficar internada devido ?? press??o alta. Nos primeiros dias, os m??dicos achavam que se tratava de uma infec????o urin??ria e, pelo estado avan??ado da gravidez, era melhor permanecer no hospital at?? a alta. Mas n??o houve melhora na condi????o e mais exames foram feitos: Nath??lia tinha uma s??ndrome rara chamada HELLP, uma complica????o grave que se desenvolve antes da 37?? semana e que exige o parto imediato. ???A gente fez um parto ??s pressas, foi uma cesariana com anestesia geral, ent??o o Marlon n??o pode participar???, relembra Nath??lia.      </p>';
  texto10 = '<p> Desse modo, Matias nasceu prematuro, com hemorragia interna cerebral n??vel 1 e nota 2 na <a href="https://bvsms.saude.gov.br/bvs/publicacoes/cadernos_atencao_basica_32_prenatal.pdf"  target="_blank">escala APGAR</a>, uma avalia????o muito baixa para um rec??m-nascido, o que significa que ele nasceu com uma dificuldade grave e que precisa ser tratado imediatamente. No entanto, a nota na escala n??o indica nenhum atraso no desenvolvimento da crian??a ao longo da vida, apenas que na hora do nascimento aconteceram complica????es. Desse modo, Matias foi entubado na hora e, ele e a m??e, precisaram ficar internados na UTI ???  Nath??lia permaneceu por sete dias e Matias nove.      </p>';
  texto11 = '<p> Ap??s a alta de ambos, o rec??m-nascido precisou receber um acompanhamento do pediatra e neurologista para garantir que tudo estava bem. At?? ent??o n??o existia nenhum ind??cio da doen??a gen??tica e nenhuma complica????o relacionada a ela, como enfatiza Marlon: ???Essa quest??o inicial do Matias n??o tem nada a ver com essa doen??a que ele tem hoje. Mesmo que ele n??o tivesse passado por esse epis??dio na maternidade na hora que nasceu, ele viria a ter essa doen??a de qualquer jeito???.     </p>';
  texto12 = '<h2>O descobrimento da doen??a      </h2>';
  texto13 = '<p>Quando Matias tinha dois meses, os pais come??aram a perceber um crescimento precoce no tamanho da cabe??a, al??m de um atraso no desenvolvimento das capacidades motoras: ???Ele n??o rolava, s?? ficava com o pescocinho de um lado, n??o girava para o outro, o olhar era um pouco vago; eu amamentei, mas a gente percebia que n??o era uma crian??a que sugava durante muito tempo tamb??m???, explica Nath??lia. Os pais n??o sabiam, mas eram caracter??sticas da doen??a gen??tica. Mas como Matias era um beb?? prematuro, houve muita d??vida em rela????o aos sintomas: se era algo mais s??rio ou se eram consequ??ncias por ter nascido antes da hora. Aos tr??s meses, ele continuava a ser um beb?? mole, sem firmeza no corpo e os m??dicos ainda tratavam as sequelas como decorr??ncia da prematuridade.      </p>';
  texto14 = '<p>???Quando estava com seis meses, a gente foi em uma neurologista, que disse pra mim que o Matias tinha uma paralisia cerebral. A gente j?? tinha ido a dois neuros, um com tr??s meses e outro com quatro meses, que disseram que parecia ser um atraso no desenvolvimento???, conta Nath??lia, indicando dificuldades para o diagn??stico correto, que apareceu apenas aos oito meses.      </p>';
  texto15 = '<p>A investiga????o da doen??a s?? avan??ou quando foram a uma neurologista da Universidade Federal do Rio de Janeiro (UFRJ). Nath??lia relembra que a m??dica afirmou n??o ser paralisia cerebral e sim uma doen??a metab??lica rara, que causa altera????o no funcionamento geral do organismo, mas que era preciso investigar com outros exames: ???A m??dica pediu alguns exames e teve que colocar a indica????o do nome da doen??a. A gente come??ou a pesquisar na internet e encontramos um casal no Rio de Janeiro que tinha uma crian??a com a mesma doen??a. Entramos em contato e eles indicaram uma nutr??loga no Rio de Janeiro???, explica. Com os exames em m??o, descobriram finalmente o que o filho tinha: Acid??ria Glut??rica tipo I, doen??a gen??tica derivada de erros inatos do metabolismo, que se manifesta quando ambos os pais s??o portadores de um gene que n??o permite o organismo de absorver amino??cidos, levando a um ac??mulo t??xico e a uma crise metab??lica aguda, se n??o tratada precocemente.      </p>';
  texto16 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/3.jpg" />';
  texto17 = '<p style="font-size: 12px;"> ???Matias ?? o Matias. A doen??a n??o define quem ele ????? (Foto: Instagram Raro Matias | arquivo pessoal)     </p>';
  texto18 = '<p>A doen??a do Matias ?? uma das 53 diagnosticadas pelo Teste do Pezinho ampliado, que ainda n??o ?? disponibilizado pelo SUS na maioria dos estados brasileiros, que tria apenas seis. ???A nutr??loga do Matias costuma dizer que n??o consegue entender como ?? que uma crian??a de UTI-neonatal, por exemplo, j?? n??o faz um teste do pezinho ampliado???, destaca Nath??lia. Quando nasceu, Matias fez o Teste do Pezinho, que em Niter??i (RJ) tria 30 doen??as, mas a dele n??o est?? contemplada. Com essa falta de informa????o dos profissionais, o sentimento dos pais foi de muita revolta, j?? que o filho deles podia estar hoje sem nenhuma sequela. Eles s?? descobriram a exist??ncia de outro tipo de teste, o ampliado, ao receberem o diagn??stico.       </p>';
  texto19 = '<p>???Costumamos falar que, na ??poca, nem deu muito tempo de pensar, porque a gente tinha que agir muito, descobrir onde tratar, porque a nutr??loga tratava mais a quest??o da dieta, mas a gente queria saber o que se tratava dessa doen??a", comenta Marlon. J?? com o diagn??stico em m??os, os pais conseguiram se situar e ter conhecimento do que o filho tinha: ???Ent??o o diagn??stico veio como algo que a gente costuma falar, de al??vio. Porque a gente estava com o diagn??stico de paralisia cerebral. Se a gente n??o continuasse investigando, talvez at?? hoje estar??amos com o diagn??stico de paralisia cerebral???, completa Nath??lia.      </p>';
  texto20 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto4/4.jpg" />';
  texto21 = '<p style="font-size: 12px;">Matias segue diversos m??todos de reabilita????o para estimular o c??rebro e atingir marcos de desenvolvimento  (Foto: Instagram Raro Matias | arquivo pessoal)     </p>';
  texto22 = '<p>A aprova????o da lei n?? 5.043/2020 pelo Governo Federal, que ampliou as doen??as triadas do Teste do Pezinho de seis para 53, foi muito comemorada pela fam??lia.      </p>';
  //video
  texto23 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/kwzfIRKBrbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto24 = '<h2>Qualidade de vida: tratamento e recursos      </h2>';
  texto25 = '<p>Hoje, Matias tem sequelas motoras. Ele n??o anda, n??o fala, n??o senta e n??o segura o pesco??o. ???Mas ele tem o cognitivo perfeito ent??o ele entende a gente muito bem???, explica Nath??lia. Os tratamentos e as terapias s??o feitas pensando na manuten????o da qualidade de vida do Matias.      </p>';
  texto26 = '<p> Com isso, a rotina da fam??lia ?? ocupada. Enquanto o Marlon trabalha fora e a Nath??lia se dedica a um curso de doutorado, eles t??m que se organizar para as terapias de segunda a sexta-feira. Matias faz fisioterapia, terapia respirat??ria e motora, hidroterapia, fonoaudiologia e encontros com a psicopedagoga. Al??m do tratamento das sequelas, Matias tem uma dieta r??gida, que ?? pesada e contada diariamente, junto do leite e de rem??dios, como os que ajudam no controle motor. Atualmente, ele se alimenta, principalmente, via gastrostomia, uma sonda ligada diretamente no est??mago que permite que ele complete a alimenta????o e mantenha-se saud??vel, j?? que o momento de comer estava sendo estressante. Junto disso, Matias ainda conta com uma equipe m??dica que acompanha o desenvolvimento e o bem-estar, como ortopedista, pediatra, neurologista, nutr??loga e um m??dico dos Estados Unidos. Existem outros custos adicionais, como sand??lias ortop??dicas, adapta????o de cadeira e outros equipamentos essenciais para a qualidade de vida do menino.  </p>';
  texto27 = '<p> Ao receber o diagn??stico, o casal decidiu que iriam se consultar com um m??dico que ?? refer??ncia no tratamento da Acid??ria Glut??rica, Kevin Strauss, da Clinic for Special Children, nos Estados Unidos. Nath??lia explica a import??ncia de conversar com quem entende da doen??a, uma das dificuldades que eles tinham aqui no Brasil: ???Chegando l?? foi incr??vel, porque a gente teve uma consulta com um m??dico que entendia da doen??a, que j?? tinha visto mais de cem pessoas. Ent??o, ele explicou tudo com muitos detalhes e a gente teve no????o da gravidade e de todas as sequelas que nosso filho adquiriu???. Al??m disso, na cl??nica americana eles ganharam  equipamentos e o leite que o Matias precisa. Com a pandemia, as consultas t??m sido online e a fam??lia precisa se virar para conseguir trazer o leite, n??o dispon??vel no Brasil ??? ele ?? essencial na dieta. Hoje em dia, em m??dia, o Matias toma oito latas de leite por m??s.     </p>';
  //video viagem aos eua
  texto28 = '<iframe  style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/MKv0hwuRCCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  texto29 = '<p>A ??ltima viagem ao m??dico dos Estados Unidos foi em agosto de 2019 (V??deo: Facebook Raro Matias | arquivo pessoal)      </p>';
  texto30 = '<p> Percebe-se que o custo do tratamento ?? alto e a fam??lia precisa se virar para conseguir bancar tudo. ???A maior dificuldade ?? justamente na quest??o do recurso. A gente costuma dizer que pra dar um tratamento de qualidade para uma crian??a deficiente voc?? tem que ser rico ou se virar???, aponta Nath??lia. Ent??o, para conseguir dar conta dos gastos, o casal come??ou a fazer bazares, rifas e eventos de feijoadas a fim de arrecadar dinheiro. A ideia surgiu quando precisaram ir pela primeira vez ao m??dico americano: ???Fizemos uma vaquinha, depois bazar, almo??o de feijoada, e conseguimos arrecadar recursos para a viagem. Na segunda vez, a gente j?? tinha uma estrat??gia para fazer bazares de tr??s em tr??s meses???, explica Nath??lia.     </p>';
  texto31 = '<img style="width: 30%;   margin-left:17.5%"  src="../assets/familia/texto4/5.jpg" />           <img style="width: 30%;   margin-left:17.5%"  src="../assets/familia/texto4/6.jpg" />';
  texto32 = '<p style="font-size: 12px;">  Informativos de bazar e de rifa divulgados nas redes sociais (Foto: divulga????o).    </p>';
  texto33 = '<p> O sucesso das atividades de arrecada????o tem sido grande que, al??m de complementar a renda familiar, criou uma rede de solidariedade. Marlon conta que, durante a pandemia, o bazar, que j?? ?? realizado h?? tr??s anos, tem ajudado na economia de outras fam??lias: "Tanto as pessoas que iam l?? comprar produtos para os filhos, quanto pessoas que n??o estavam tendo uma renda legal na pandemia, come??aram a comprar do bazar do Matias para montar os seus bazares. Foi uma coisa ligando a outra. Foi bem legal isso, saber que outras pessoas estavam sendo ajudadas", compartilha.     </p>';
  texto34 = '<p>  Para aproveitar a rede de apoio, a fam??lia fez uma a????o no quarto anivers??rio de Matias. Fizeram campanha nas redes sociais, no Instagram e Facebook do Raro Matias, venderam rifas por quatro reais e com o valor compraram 40 cestas b??sicas para doa????o: "A gente viu a situa????o que muitos estavam passando na pandemia, e juntamos esta rede de apoio pra comemorar o anivers??rio dele. S??o coisas que v??o se estendendo, alcan??ando e ajudando outras pessoas tamb??m", conta Marlon.    </p>';
  texto35 = '<p> Todo esse esfor??o vale a pena. Nath??lia conta que s??o v??rias supera????es, desde quando eles sa??ram com vida da UTI at?? os avan??os que o Matias faz: ???A gente come??ou a valorizar mais a vida. O Matias ?? um tipo de crian??a que acorda e dorme sorrindo. E diversas coisas ele j?? conseguiu, por exemplo: ele s?? virava o pesco??o pra um lado. Ent??o hoje, ele virar o pesco??o para os dois lados, pra gente ?? uma vit??ria???, finaliza.   </p>';
  texto36 = '<p>      </p>';
  texto37 = '<p>      </p>';
  texto38 = '<p>      </p>';
  texto39 = '<p>      </p>';
  texto40 = '<p>      </p>';

  texto41 = '';
  texto42 = '';
  texto43 = '';





}


function mudaTexto4(){
  texto = '<h2> Hist??rias ampliadas: Larissa Carvalho tem como miss??o pessoal a divulga????o e amplia????o do Teste do Pezinho. </h2>';
  texto2 = '<h3>O filho Th??o tem uma doen??a rara que poderia ter sido diagnosticada e tratada precocemente se tivessem descoberto antes  </h3>';
  texto3 = '<p>O sonho da Larissa Carvalho, jornalista da TV Globo Minas, sempre foi ser m??e de dois meninos. Desde crian??a ela desejava ter um Jo??o e um Th??o. Primeiro nasceu o Jo??o. Mas o desenvolvimento do filho mais novo, o Th??o, n??o ocorreu como o esperado. A fam??lia descobriu que Th??o nasceu com uma doen??a rara e gen??tica, que deixa sequelas no beb?? se n??o tratada precocemente, a Acid??ria Glut??rica tipo I (GA I), um erro inato do metabolismo, que impede que o organismo da crian??a absorva prote??na, que acaba acumulando e sendo t??xica. Essa doen??a, como v??rias outras raras, n??o ?? detectada no Teste do Pezinho b??sico, amplamente divulgado e realizado pelo SUS. </p> ';
  texto4 = '<p>Hoje, o Th??o tem seis anos e ?? uma crian??a hipot??nica. Ele n??o anda, n??o fala e precisa de uma dieta restrita, al??m de v??rias fisioterapias para o tratamento das sequelas e uma melhor qualidade de vida. A vida da fam??lia mudou de v??rias maneiras.       </p>';
  texto5 = '<p> ???Eu tive gravidez e parto totalmente como esperei na vida???, conta Larissa. Th??o nasceu de ces??rea, no hospital e com a equipe desejada pela m??e: ???Quando ele nasceu, eu escutei uma pessoa da equipe dizendo: t?? tudo bem com ele viu, seu filho ?? lindo???, complementa. No nascimento do Th??o tudo correu bem, ele obteve uma nota 9 na escala APGAR, teste realizado nos primeiros minutos de vida do beb?? e que avalia o estado geral do rec??m-nascido como atividade, batimento card??aco e respira????o.   </p>';
  texto7 = '<img style="width: 60%;   margin-left:17.5%"  src="../assets/familia/texto5/2.jpg" />';
  texto8 = '<p style="font-size: 12px;">"Desde pequena eu quis ser m??e de dois, e meninos ainda, e fui uma gr??vida muito feliz???, conta Larissa. Na foto: Larissa Carvalho com seus filhos, Th??o e Jo??o. (Foto: B??rbara Dutra)  </p>';
  texto9 = '<p> ???Ent??o eu n??o tive o menor sinal de que tudo isso ia acontecer na minha vida???, explica Larissa. Os primeiros meses foram todos dentro do esperado, a vida da fam??lia n??o podia ser melhor.    </p>';
  texto10 = '<h2> A descoberta da doen??a   </h2>';
  texto11 = '<p>A jornalista relata que come??ou a perceber que o desenvolvimento do Th??o n??o estava indo como o esperado entre o quarto e o quinto m??s: ???Era um beb?? muito mole, hipot??nico, parecia um bonequinho de pano. Ent??o, ele nunca chupou o p??, ele tentava segurar as coisas, os bichinhos, para levar na boca e nunca conseguiu segurar nada???.       </p>';
  texto12 = '<p> O desenvolvimento infantil n??o ?? linear e n??o ?? igual para todos os beb??s, mas pode-se esperar, de maneira geral, alguns marcos conforme o rec??m-nascido for crescendo. Por exemplo, ?? no quarto m??s que o beb?? come??a a ter mais movimentos, como virar o pesco??o, tentar pegar um objeto e reconhecer a m??e e os sons. A partir da??, com o passar dos meses, eles desenvolvem melhor o t??nus e ampliam os movimentos, como sentar com apoio, pegar os brinquedos, engatinhar e andar. Mas, o desenvolvimento do Th??o seguiu diferente e indicou que algo mais s??rio tinha acontecido.     </p>';
  texto13 = '<p>  Preocupada, Larissa foi ?? pediatra, que tamb??m percebeu os atrasos e que ele n??o tinha firmeza no corpo, a cabe??a e o pesco??o n??o ficavam erguidos, os bra??os n??o seguravam os objetos: ???A gente fez uma resson??ncia magn??tica e viu, por essa fotografia do c??rebro, que havia um lugar no c??rebro dele com pouqu??ssimos neur??nios???, explica. Th??o tinha poucos neur??nios numa regi??o chamada de put??men, localizado na parte central do c??rebro e respons??vel pelo controle motor do corpo. E assim, iniciou-se uma longa trajet??ria com m??dicos e exames para descobrir o diagn??stico e o que tinha acontecido ??? uma das principais perguntas a serem respondidas pelos m??dicos era em que momento aconteceu a perda de neur??nios.   </p>';
  texto14 = '<p> Do quinto m??s de idade at?? um ano e 10 meses, a Larissa e o Th??o foram a diversos m??dicos, fizeram v??rios exames e receberam muitos diagn??sticos, todos errados: ???Todos insistiam que em algum momento ele tinha perdido neur??nios por falta de oxig??nio. N??o era isso. Eu sabia que n??o era, porque a minha gravidez foi ??tima, meu parto foi ??timo, ent??o n??o tinha porque ter perdido neur??nio por falta de ar. Em que momento teria faltado ar????, questiona Larissa.     </p>';
  texto15 = '<p>Enquanto a resposta n??o vinha, a m??e de Theo continuou na longa busca. ???Eu rezava todas as noites na janela, s?? pedia isso a Deus: eu j?? entendi que tenho um filho com defici??ncia, j?? entendi que tenho um filho sem neur??nios e isso est?? determinando nele uma situa????o de sequelas. Mas eu queria saber pelo menos o porqu?????, lembra.       </p>';
  texto16 = '';
  texto17 = '<p> Finalmente, mais de um ano depois, no Hospital Sara Kubitschek, em Belo Horizonte (MG), profissionais de sa??de descobriram que Th??o tinha uma doen??a gen??tica, um erro inato do metabolismo, chamada de Acid??ria Glut??rica tipo I. Com essa doen??a, o organismo da crian??a n??o consegue quebrar os amino??cidos, que ao inv??s de virarem energia, ficam acumulados e viram toxinas prejudiciais. Quando um beb?? n??o ?? diagnosticado precocemente, ele tem uma crise aguda que deixa sequelas. Toda vez que Th??o ingeria alimentos com prote??nas, acabava perdendo neur??nios, j?? que o corpo n??o conseguia quebrar e absorver este nutriente. Para Larissa, foi como se ela tivesse levado um golpe: ???Meu primeiro sentimento foi de pavor. Eu entendi que eu tinha matado os neur??nios do meu filho, dando para ele a melhor comida do mundo, leite de m??e, ovo, feij??o, carne???, expressa.      </p>';
  texto18 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/3.jpg" />';
  texto19 = '<p style="font-size: 12px;">Th??o ajudou sua m??e a transformar a vida de milhares de fam??lias lutando pelo teste do pezinho ampliado (Foto: Carol Salgado).   </p>';
  texto20 = '<h2> O come??o de uma nova vida     </h2>';
  texto21 = '<p> Ap??s o choque e o medo inicial, a vida da fam??lia come??ou a se endireitar. Larissa continuou trabalhando como rep??rter, o Jo??o mant??m as atividades cotidianas, como escola, gin??stica, psic??loga e, com jeitinho, a vida achou um novo normal. ???Aos poucos as coisas foram se ajeitando, no cora????o, nos sonhos, no or??amento, na rotina. A gente se adaptou, a fam??lia absorveu esse menino como ele ?? exatamente, com amor. E a gente parou de sonhar que ele vai ficar com todas as compet??ncias recuperadas. A gente vive o Th??o como ele ?????, conta Larissa.     </p>';
  texto22 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/4.png" /> ';
  texto24 = '<p style="font-size: 12px;">A doen??a do Th??o n??o tem cura, apenas o tratamento das sequelas e o incentivo ao c??rebro de aprender novas coisas (Foto: Larissa Carvalho | Instagram)  </p>';
  texto25 = '<p>A rotina do Th??o ?? intensa: ele faz dez horas de reabilita????o na semana, com  fisioterapia, terapia ocupacional, equoterapia e escola especial. Al??m disso, ele precisa de rem??dios e tem uma dieta especial, no qual toda a comida ?? pesada e contada durante o dia e a semana, junto de uma f??rmula que custa, em m??dia, 2.400 reais, que precisa ser comprada a cada 15 dias.      </p>';
  texto26 = '<p>Nesses momentos, a rede de apoio ?? fundamental. ???Eu tenho pessoas no meu entorno que me amam, que amam o Th??o, com quem posso contar, muitos amigos, uma boa funcion??ria, meu filho Jo??o, o pai tamb??m colabora um pouco???, compartilha Larissa. O apoio ?? necess??rio, seja para levar e buscar nas terapias, cuidar dentro de casa, ajudar nas compras e estar presente. Larissa explica que as m??es precisam de uma m??o estendida e um cuidado: ???As pessoas precisam abrir mais o cora????o, prestar mais aten????o quando tem uma pessoa com defici??ncia ao redor???.   </p>';
  texto27 = '<p> Al??m da rotina adaptada, o modo de encarar a vida tamb??m mudou, e para melhor. A fam??lia come??ou a olhar com mais carinho as situa????es di??rias, especialmente em rela????o ??s pessoas com defici??ncia ??? um observar mais respeitoso e paciente. E tamb??m a vivenciar na pele os desafios, como andar de cadeira de rodas nas cal??adas, muitas vezes mal feitas; uma vaga de estacionamento preferencial utilizada por outras pessoas que n??o se encaixam na prioridade. Al??m disso, a situa????o tamb??m influenciou na iniciativa de trabalho volunt??rio junto ao terceiro setor em v??rias frentes.   </p>';
  texto28 = '<h2>  A luta e a conquista da amplia????o    </h2>';
  texto29 = '<p>Quando nasceu, o Th??o fez o Teste do Pezinho b??sico, que n??o detecta a sua doen??a. Larissa n??o recebeu bem a not??cia de que a doen??a poderia ter sido descoberta a tempo de ser tratada precocemente, por meio do Teste do Pezinho ampliado, atualmente ainda dispon??vel, na maioria dos estados, apenas na rede particular. ???Eu tive muita raiva de saber que existe um Teste do Pezinho que poderia ter salvo o meu filho. E que essa informa????o n??o ?? compartilhada???, explica.   </p>';
  texto30 = '<p>  Para ela, existem falhas de comunica????o, estrutural e de comportamento envolvendo m??dicos, enfermeiros, t??cnicos em enfermagem, professores e alunos de cursos da ??rea m??dica, al??m do Estado n??o oferecer ajuda. Larissa s?? conseguiu o leite necess??rio ?? alimenta????o do filho, ap??s atua????o da Defensoria P??blica de Minas Gerais: ???O Estado brasileiro deveria vir na nossa porta com pedido de perd??o por ter feito isso com os nossos filhos. E o tratamento totalmente pago e garantido, mas n??o. Eles n??o s?? colocaram os nossos filhos numa cadeira de rodas, como tamb??m n??o fornecem pra gente o tratamento, a gente tem que ir pra justi??a???, exclama.   </p>';
  texto31 = '<p> Al??m disso, Larissa explica que n??o existe a informa????o sobre os testes ampliados realizados na rede privada para as fam??lias, na maioria dos casos: ???As fam??lias t??m o direito de saber. Se o pai ou a m??e n??o vai fazer porque ele confia no SUS ou porque n??o tem o dinheiro para pagar o particular, ?? uma quest??o de cada um. Quando n??o indicam, n??o esclarecem dentro de um consult??rio, dentro de um posto de sa??de que existe um Teste do Pezinho ampliado na rede particular, tamb??m s??o respons??veis por cada Th??o numa cadeira de rodas???, argumenta Larissa.     </p>';
  texto32 = '<p> Essa realidade de desinforma????o e de indigna????o, que afetou diretamente Larissa e diversas outras fam??lias pelo Brasil, acabou inspirando a vontade de divulgar o teste para todos e lutar para que ele fosse ampliado na rede p??blica. Assim, a rep??rter se juntou ao Instituto Vidas Raras na campanha ???Pezinho no Futuro???, com eventos e conversas, al??m de uma peti????o, que atingiu mais de 620 mil assinaturas. ???Eu me juntei a eles nessa luta e a partir da?? comecei a fazer muitas reportagens sobre o assunto, que chamaram muita aten????o do Congresso Nacional???, comenta. Desse modo, ela e o Th??o se tornaram umas das principais for??as na luta pela amplia????o do Teste do Pezinho.   </p>';
  texto33 = '<p> Al??m das reportagens e do trabalho na campanha, Larissa Carvalho tamb??m fez palestras, como no <a href="https://www.youtube.com/watch?v=ElqZ7-FXHdw"  target="_blank">TedxPUCMinas</a>, contando sua hist??ria; participou do programa ???Encontro com F??tima Bernardes???, da TV Globo, em <a href="https://globoplay.globo.com/v/8976348/"  target="_blank">outubro de 2020</a> e <a href="https://globoplay.globo.com/v/9483461/"  target="_blank">maio de 2021</a>; e, recentemente, lan??ou o document??rio <a href="https://globoplay.globo.com/uma-gota-de-esperanca/t/h22XpPF75z/"  target="_blank">???Uma gota de esperan??a???</a>, sobre a hist??ria dela e do Th??o, no Globoplay. Assim, chamou a aten????o das pessoas e mostrou a import??ncia das fam??lias realizarem o Teste do Pezinho e da necessidade de sua amplia????o na rede p??blica de sa??de.     </p>';
  texto34 = '<p>Assim, juntos, Larissa e o Instituto Vidas Raras, conseguiram transformar a realidade de diversas fam??lias. A amplia????o do Teste do Pezinho virou lei e vai salvar milhares de crian??as. Larissa explica que o Brasil tem a capacidade de ampliar porque o sistema p??blico ?? eficiente e que a amplia????o vale a pena: ???Vai precisar de um investimento no come??o. Quando a gente faz a conta, de quanto custa tratar as crian??as com sequelas e quanto custa investir nessa rede, em tr??s anos a conta se ajeita. T?? paga. E a?? a gente n??o vai ter mais nenhum Th??o na cadeira de rodas por causa de um Teste do Pezinho ineficiente???.      </p>';
  texto35 = '<img style="width: 60%;   margin-left:17.5%" src="../assets/familia/texto5/5.png" />';
  texto36 = '<p style="font-size: 12px;"> Evento realizado em S??o Paulo para divulgar o teste do pezinho ampliado. Na foto: Larissa Carvalho, a atriz Bianca Rinaldi, e a presidente do Instituto Vidas Raras, Regina Pr??spero. (Foto: instagram Larissa Carvalho).      </p>';
  texto37 = '<p>  ???Eu acho que a maior supera????o foi ter conseguido construir essa hist??ria de mudar o teste do pezinho no Brasil. Eu n??o conseguiria dormir sabendo de tanto de Larissa e tanto de Th??o vivendo numa hora dessa no Brasil. ?? um compromisso ??tico-social mesmo???, explica Larissa.   </p>';
 //video
  texto38 = '<iframe style="margin-left:17.5%" width="560" height="315" src="https://www.youtube.com/embed/wSZ3Tgv6ghk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  texto39 = '';
  texto40 = '';
  texto41 = '';
  texto42 = '';
  texto43 = '';

}



