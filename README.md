# Online-Collaboration-Platform-based-on-Chorus-Model

### 产品定位

-  Linger帮助有远距离训练需求的合唱团进行基本的辅助练习。Linger提供声音叠制仿真模拟及音频文件信息管理功能，致力成为在线演唱市场的补缺者。 

![声音叠加机制图解](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/Linger/%E5%A3%B0%E9%9F%B3%E5%8F%A0%E5%8A%A0%E6%9C%BA%E5%88%B6%E5%9B%BE%E8%A7%A3.jpg)

------



### 市场研究

- 市场分析

  - 宏观环境

    - 政治——互联网+
    - 技术——云存储、人工智能

  - 市场机会

    - 市场规模

      - 泛娱乐行业
        - 截止到2019年4月，泛娱乐用户规模达到10.86亿，月人均使用时长同比增长13.8%。
        - 佚名. 2018中国泛娱乐产业前景研究报告[R]. 深圳：中商产业研究院，2018.

      - 移动k歌行业
        - 2018年第1季度-2019年第1季度，中国移动K歌行业用户规模实现稳定增长，2019年第1季度较上季度的2.48亿人增长至2.56亿人，环比增长3.2%。
        - 佚名. 2019年第1季度中国移动K歌APP产品市场研究报告[R]. 北京:北京比达信息咨询有限公司, 2019.

    - 市场渗透率

      - 自2014年在线K歌行业开始规模化发展以来，至2018年，市场渗透率达50.6%。
      - 佚名. 2020年中国在线K歌娱乐行业白皮书[R]. 上海:艾瑞咨询, 2020.

- 竞品分析

  - | 产品名称   | 全民K歌                                                      | 唱吧                                                         |
    | ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | 版本号     | 7.11.28                                                      | 10.3.4                                                       |
    | 上线日期   | 2014/09                                                      | 2012/05                                                      |
    | Logo       | <img src="https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90/%E5%85%A8%E6%B0%91K%E6%AD%8Clogo.jpg" alt="全民K歌logo" style="zoom:5%;" /> | <img src="https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90/%E5%94%B1%E5%90%A7logo.jpg" alt="唱吧logo" style="zoom:5%;" /> |
    | 月活跃人数 | 16,238.1万                                                   | 2,891.2万                                                    |
    | Slogan     | 你其实很会唱歌                                               | 玩音乐，就上唱吧                                             |
    | 产品定位   | 基于熟人社交K歌应用                                          | 免费的社交K歌手机应用                                        |
    | 优势       | 1. 用户裂变强，背靠微信QQ2. 音乐版权丰富3. 公司资金链充足    | 1. 市场先发2. 陌生人玩法经验丰富3. 大量艺人                  |
    | 用户群体   | 年龄分布在20-39岁                                            | 年龄分布在20-29岁，男性用户偏多                              |

  

  ![全民K歌信息架构](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90/%E5%85%A8%E6%B0%91K%E6%AD%8C%E4%BF%A1%E6%81%AF%E6%9E%B6%E6%9E%84.png)

  ![唱吧信息架构](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90/%E5%94%B1%E5%90%A7%E4%BF%A1%E6%81%AF%E6%9E%B6%E6%9E%84.png)

- 用户调研

  - 对目标用户**合唱团指挥、合唱团团员、作曲方、音源接收方**构建师徒式访谈

- 需求管理

  - | 用户对象 | 情景剧本                                                     | 用户需求                                                     | 解决方案                                                     |
    | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | 发起者   | 即使无法集训，也能检查学生练唱情况且每个作品参与的学生不一样 | ① 希望平台提供指挥的辅助功能，帮助学生更好地训练② 分清楚哪些学生参加的是哪些作品 | ① 提供练唱功能，对学生提交的练唱作品进行收纳② 采取非公开链接，以作品为中心让学生参与，而非团体 |
    | 发起者   | 为了参加小型表演活动，需要快速查找团内以前唱过的音频及曲谱   | 上传自己使用过或下载过的音频文件及信息，方便下次快速查找     | 平台提供音频文件及信息归档，并对文件进行标签化               |
    | 参与者   | 合唱曲目声部练习                                             | ① 矫正自己的音准和气息② 与其他声部互相配合                   | ① 平台提供标记辅助或者让音频上传方在曲谱处进行标记② 提供多声部和多用户版本让用户练唱时听取叠加 |

------



### 架构流程

- 产品架构

![Linger产品架构](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/Linger/%E4%BF%A1%E6%81%AF%E6%9E%B6%E6%9E%84.png)

- 业务流程图

![Linger业务流程图](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/Linger/%E4%B8%9A%E5%8A%A1%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

### 交互原型

![页面流程图](https://github.com/yvonnelxq/Online-Collaboration-Platform-based-on-Chorus-Model/blob/main/relatedImages/Linger/%E9%A1%B5%E9%9D%A2%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
