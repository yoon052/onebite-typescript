type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case 'GUEST':
      {
        console.log(
          `${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`
        );
      }
      break;
  }
}

/**
 * 서로소 유니온 타입 복습겸 한가지 더 사례
 */

//비동기 작업의 결과를 처리하는 객체를 3가지로 표현

//3가지 객체를 하나의 타입으로 표현해보자.
type AsyncTask = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS';
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

function processResult(task: AsyncTask) {}

const loading: AsyncTask = {
  state: 'LOADING',
};
const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류메시지',
  },
};
const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터~~',
  },
};
