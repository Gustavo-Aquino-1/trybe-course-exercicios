const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (orderi) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Ola ${orderi.order.delivery.deliveryPerson}, entrega para: ${orderi.name}, Telefone: ${orderi.phoneNumber},R. ${orderi.address.street}, N° ${orderi.address.number}, AP: ${orderi.address.apartment} `)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (orderi) => {
    // Adicione abaixo as informações necessárias.
    orderi.order.delivery.deliveryPerson = 'Luiz Silva'
    orderi.payment.total = 50
    const pizza = Object.keys(orderi.order.pizza)
    console.log(`Ola ${orderi.order.delivery.deliveryPerson} , o total do seu pedido de ${pizza[0]},${pizza[1]} e ${orderi.order.drinks.coke.type} é R$ ${orderi.payment.total}`)
  
  }
  
  orderModifier(order);

  