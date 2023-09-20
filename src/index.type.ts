/**
 * Написать функцию, которая на входе получает длину массива,
 * который нужно сгененерировать,
 * заполнить каждый элемент случайным числом от 0 до 100,
 * и вернуть массив
 */
export function createArray(length: number): number[] {
  console.log(length);

  return new Array(length)
    .fill(0)
    .map(
      () => Math
        .round(
          Math.random() * 100
        )
    );
}

type Person = {
  name: string;
  age: number;
  phones: string[];
};

/**
 * Написать generic type,
 * который принимает тип и на его основе формирует новый тип,
 * с идентичными полями,
 * с разницей в том, что тип каждого поля превращается в массив
 * с сохранением типа.
 * 
 * type ArrayCollection<T>

 */

type ArrayCollection<T> = {
    [K in keyof T]: T[K] | T[K][];
};

/*
 Пример типизированный константы для type Person 
 */
const b: ArrayCollection<Person> = {
    age: [12, 32, 55],
    name: ['Steve', 'Nancy', 'Harry'],
    phones: [['122-333-444'], ['122-333-444', '122-333-444'], []]
};

console.log(b);
  
  /**
   * сущность описывающая адрес.
   */
type Address = {
    PostalCode: string; // Индекс
    Country: string; // Страна
    FederalDistrict: string; // Федеральный округ
    RegionType: string; // Тип региона (сокращенный)
    Region: string; // Регион
    CityWithType: string; // Город с типом
    CityArea: string; // Административный округ (только для Москвы)
    Settlement: string; // Населенный пункт
    StreetWithType: string; // Улица с типом
    HouseType: string; // Тип дома
    House: string; // Дом
    BlockType: string; // Тип корпуса/строения (сокращенный)
    Block: string; // Корпус/строение
};
  
  /**
   * 2 Склеить адрес в читаемый вид
   * Индекс, страна, регион, город, дом с типом, корпус с типом (если есть)
   */
export function getHouseAddress(address: Address): string {
    return `${Object.values(address).join(' ')}`;
}

console.log(getHouseAddress({
    PostalCode: '3',
    Country: '5',
    FederalDistrict: 'rt',
    RegionType: '5',
    Region: 'hj',
    CityWithType: 't',
    CityArea: '243',
    Settlement: 'yt',
    StreetWithType: '5',
    HouseType: 'j',
    House: 'gh',
    BlockType: 'gh',
    Block: 'we'
}));
  
  /***
   * Есть два типа результата - одиночный и множественный
   * НАписать generic SelectResult, который вторым необязательным типом принимает multiple, boolean type, 
   * и в зависимости от его значения, должен корректно выставляться тип поля result 
  
   * Примеры использования 
   * const MultiResult: SelectResult<Person, true> = {
      result: [
        {
          name: '',
          age: 'string'
        },
        {
          name: '',
          age: 'string'
        }
      ]
    }
  
    const SingleResult: SelectResult<Person> = {
      result:  {
        name: '',
        age: 'string'
      },
    }
   */
    type SelectResult<T, Mul extends boolean = false> = {
        result: Mul extends true ? Array<T> : T;
    };

  const MultiResult: SelectResult<Person, true> = {
    result: [
        {
            name: '',
            age: 0,
            phones: ['']
        },
        {
            name: '',
            age: 0,
            phones: [''],
        }
    ]
  }
  
console.log(MultiResult);

const SingleResult: SelectResult<Person> = {
    result:  {
        name: '',
        age: 0,
        phones: [],
    },
}
console.log(SingleResult);