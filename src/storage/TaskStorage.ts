import storage from './storage';
import {Task} from '../modules/Tasks';

const KEY: string = 'task';

/**
 * タスク ストレージクラス
 */
export default class TaskStorage {
  /**
   * 読み込み処理
   */
  static load = async (): Promise<Task[]> => {
    // 端末内に保存されているタスク一覧を読み込む
    const taskList: Task[] = await storage
      .load({key: KEY})
      .then((data: Task[]) => {
        // 正常に読み込めた場合の処理
        return data;
      })
      .catch(() => {
        // 読み込めなかった場合の処理
        // 空の配列を返却する
        return [];
      });
    return taskList;
  };

  /**
   * 保存処理
   * @param data タスク一覧
   */
  static async save(data: Task[]) {
    // 端末内にタスク一覧を書き込む
    await storage.save({
      key: KEY,
      data: data,
    });
  }
}
