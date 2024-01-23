// Escrevendo as classes de um Jog

class hero {
      constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
     atack() {
      let atack;
  
       switch (this.type) {
        case 'mago':
          atack = " magia";
          break;
        case 'guerreiro':
          atack = "espada";
          break;
        case 'monge':
          atack = " artes marciais";
          break;
        case 'ninja':
          atack = " shuriken";
          break;
        default:
          atack = " ataque indefinido";
      }

      console.log(`o ${this.type} ${this.name} atacou usando ${atack}`);
    }
  }
  const heroNinja = new hero('Naruto', 13, 'ninja');
  heroNinja.atack(); 

  const heroMago = new hero('MagoAdo', 55, 'mago');
  heroMago.atack(); 
  
  