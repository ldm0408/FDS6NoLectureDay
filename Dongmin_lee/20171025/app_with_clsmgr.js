(function() {
  //  생성 되는 li 요소 분석 및 필요 데이터 타입 파악

  var todos;

  var inputTodo = document.getElementById('input-todo');
  var todoList = document.getElementById('todo-list');



  // 가장 먼저 실행 되어서 데이터 배열을 todos 변수에 삽입 시켜주는 함수
  var getTodos = function() {
    todos = [
      { id: 3, content: 'HTML', completed: true, },
      { id: 2, content: 'CSS', completed: false, },
      { id: 1, content: 'Javascript', completed: true, }
    ];
    // 초기화 작업
    render();
    console.log('[GET]\n', todos);

  }

  var lastTodoId = function() {
    // todoso의 모든 요소를 방문해서 각 요소의 id값을 비교하고 그중 최대인 id 값에 +1 한 값을 반환 return
    // 여기서 사용할 데이터는 배열이고 요소는 객체로 이뤄짐 / 객체의 숫자 값만 추출해서 Math.max 사용해야함

    // todos 리스트가 모두 삭제 되면 todos가 비어있고, todos가 undefined일 때 그 경우 방어 함수 필요

    return todos ? Math.max.apply(null, todos.map(function(todo) {
      return todo.id;
    })) + 1 : 1;
  };


  var addTodo = function() {
    // 최신 data todos의 첫번째 요소로 추가
    var content = inputTodo.value;
    inputTodo.value = '';

    if (!todos) {
      todos = [{ id: 1, content: content, completed: false }];
    } else {
      // 성능 이슈로 인하여 unshift 가 아닌 concat 사용함 
      todos = [{ id: lastTodoId(), content: content, completed: false }]
        .concat(todos);
    }
    render();
    console.log('[add]\n', todos);
  };

  // check 란 상태 변화에 따라 completed 요소 값이 변경 된 todo 생성후 반환
  var toggleTodoComplete = function(id) {
    todos = todos.map(function(todo) {
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };


  // 클릭한 이벤트 타겟의 id(여기선 data-id)값을 갖고 있는 배열의 요소를 제외한 나머지 요소로 구성 된 todos 배열 필터링 후 반환
  var removeTodo = function(id) {
    todos = todos.filter(function(todo) {
      return todo.id != id;
    });
    render(); // 필터링 한 새로운 배열을 이용해서 HTML을 새로 랜더 한다
    console.log('[REMOVE]\n', todos);
  };

  // data 콘트롤 하는 부분, html 만들어 주는부분(Render함수) 각각 생성
  // html을 render함수로 방출 하는 코드
  var render = function() {
    var html = ''; // foreach 문으로 생성되는 문자열을 담아둘 변수 선언 및 ''값 할당

    todos.forEach(function(todo) {
      var checked = todo.completed ? 'checked' : '';

      html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
    });
    todoList.innerHTML = html;
  };

  // 브라우져 로드 시 실행 될 함수 / 즉 초기 데이터 리스트 ul 에 삽입
  window.addEventListener('load', function() {
    getTodos();
  });

  // 브라우져 입력창에 값 입력 후 엔터키 치는 이벤트 발생시 나타날 함수 / 즉 입력한 값을 리스트화 해서 브라우져에 띄워주는 함수( ul 요소에 삽입)
  inputTodo.addEventListener('keyup', function(e) { // event.value를 사용해야 하기 떄문에 매개변수 e 지정
    if (e.keyCode !== 13 || inputTodo.value.trim() === '') {
      return;
    }
    addTodo();
  });

  // check 란의 상태 변화에 따라 HTML 내용에 'checked' 추가 또는 삭제 해주기 위함
  // todos의 completed 요소 값을 컨트롤 해주기 위해 (true & false)
  todoList.addEventListener('change', function(e) { // change 이벤트를 알아보자
    toggleTodoComplete(e.target.id);

  });

  todoList.addEventListener('click', function(e) {
    var target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') {
      return;
    }
    removeTodo(target.dataset.id);
  });

}());

// 기능 1. text input 'enter'
//      -> todos 요소 1늘어남
//      -> html ul 내용 갱신
//         1) enter key가 눌렸는가?
//         2) 유의미한 문자열인지 check
//         3) 생성 되는 최신 id는 1 이상, 기존 배열 안의 id값 max + 1
//         4) 최신 배열[0]