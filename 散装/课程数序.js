// https://leetcode.cn/problems/QA2IGt/
// https://zhuanlan.zhihu.com/p/135094687

// 🟢🟢🟢拓扑排序

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const length = prerequisites.length;
  // flat 不会改变原数组
  const allCourse = Array.from({ length: numCourses}, (v, i) => i);

  // 临界值
  if (prerequisites.length === 0) {
      return allCourse;
  }

  let courseMap = new Map();
  let freeCourse = [];

  for (let course of allCourse) {
    courseMap.set(course, new Set());
  }

  // 获取课程的路线图
  for (let course of prerequisites) {
    const [cur, pre] = course;
    const pres = courseMap.get(cur);
    courseMap.set(cur, pres.add(pre));
  }

  // 获取当前可以学的课程(遍历courseMap)
  formatCourseMap(courseMap, undefined);


  for (let i = 0; i < freeCourse.length; i++) {
    if (freeCourse.length >= numCourses) {
      return freeCourse.slice(0, numCourses);
    }

    let curCourse = freeCourse[i];

    formatCourseMap(courseMap, curCourse);
  }

  function formatCourseMap(courseMap, curCourse) {
    for (let course of courseMap.entries()) {
      const [cur, preSet] = course;
      preSet.delete(curCourse);
      if (preSet.size === 0) {
        freeCourse.push(cur);
        courseMap.delete(cur);
      }
    }
  };

  return [];

};