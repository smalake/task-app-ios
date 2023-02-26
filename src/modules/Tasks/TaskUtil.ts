import {Task} from '.';
import {TaskStorage} from '../../storage';

/**
 * 新しいタスクを生成
 * @param all 既存タスク全件
 */
export const generateNewTask = (all: Task[]): Task => {
  let hasDuplicate: boolean = true;
  let result: Task = {
    id: -1,
    name: 'undefiend',
    comment: '',
    checked: false,
  };

  // IDの重複しないタスクを生成する
  while (hasDuplicate) {
    // ランダムなIDを生成
    const randomId: number = generateRandomNumber(100000);
    // 既存タスクの全件中に生成したIDを持つデータがあるかチェック
    const duplicate: Task | undefined = all.find(t => t.id === randomId);
    // 重複がなければOK
    if (!duplicate) {
      hasDuplicate = false;
      result = {
        id: randomId,
        name: '新しいタスク',
        comment: '',
        checked: false,
      };
    }
  }

  return result;
};

/**
 * 0から任意の値における乱数を生成
 * @param range 範囲
 */
const generateRandomNumber = (range: number): number => {
  return Math.floor(Math.random() * range);
};

/**
 * 更新・作成したタスク内容をリストに反映させる
 * @param all タスク全件
 * @param edit 更新・作成を行なったタスク
 * @param isNew 新規作成かどうか
 */
export const reflectEditToList = (
  all: Task[],
  edit: Task,
  isNew: boolean,
): Task[] => {
  let result: Task[] = [];

  if (isNew) {
    result = [...all, edit];
  } else {
    result = all?.reduce((acc: Task[], cur: Task) => {
      if (edit.id === cur.id) {
        acc.push(edit);
      } else {
        acc.push(cur);
      }
      return acc;
    }, []);
  }

  return result;
};

/**
 * 削除したタスク内容をリストに反映させる
 * @param all タスク全件
 * @param deletedId 削除したタスクID
 */
export const reflectDeleteToList = (all: Task[], deletedId: number): Task[] => {
  return all?.filter(t => t.id !== deletedId);
};

/**
 * タスク全件を読み込み
 */
export const loadTaskList = async (): Promise<Task[]> => {
  const all: Task[] = await TaskStorage.load();
  return all;
};

/**
 * タスク全件を保存
 * @param all タスク全件
 */
export const saveTaskList = (all: Task[]) => {
  TaskStorage.save(all);
};
