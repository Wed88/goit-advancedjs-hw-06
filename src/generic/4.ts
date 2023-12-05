/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {
    
  }
}
 
interface Element {
  title: any;
}

class Page extends Component<Element> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};