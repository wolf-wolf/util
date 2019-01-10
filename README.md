# 工具库

说明
---------------------
方法列表
---------------------
### 基础工具

#### 数组方法
- *insertArrToArr*: 在数组的指定位置加入新数组
- *tree2Map*: 将树形结构转换为Map结构，其中tree中的子列表的属性名为children
- *removeSpEle*: 剔除数组中制定的元素
- *createSpArray*: 生成指定长度有统一初始值的数组，<font color=red>**注意：初始值为对象，数组等引用类型时，需注意生成的数组中的所有元素为对初始值的同一引用**</font>

#### 一些常用算法
- *S4*: 四位随机数生成器
- *getUUid*: 生成UUid
- *getUUid2*: 生成UUid的第二种方式
- *characterEscape*: 特殊字符的转义

#### 其他
- *downloadFileByIFrame*: 使用iframe进行文件下载

#### 图片处理
- *dataURLtoBlob*: base64图像转Blob对象
- *getImageBase64ByCanvas*: 通过canvas获取图片的Base64码
- *getImageBase64ByReader*: 通过FileReader获取图片的Base64码
- *loadImg*: 图片加载器

#### 对象处理
- *getObjPropertyByPath*: 通过path获取对象多层级下的属性值

#### 正则表达式
- *CHINESE*: 中文字符匹配
- *DOUBLE_BYTE*: 双字节字符匹配

#### 字符串
- *strToArr*: 将可能是数组或字符串的数据转换为数组
- *initialCapital*: 首字母大写
- *pad*: 对字符串进行补位操作

#### 时间日期
- *formatDate*: 将时间转换为对应格式
- *departTimestamp*: 将时间戳按照给定的配置进行日，时，分，秒，毫秒，提取

#### 类型判断
- *isString*: 是否为字符串
- *isFunction*: 是否为函数
- *isObject*: 是否为对象
- *isNumber*: 是否为数字
- *isInTypes*: 判断是否在给定的类型中

#### URL操作
- *getQueryString*: 获取Url中对应字段的值
- *getQuerySet*: 获取URL中的检索参数，以键值对的方式返回
- *setUrlQuery*: 设置URL的参数
- *delUrlQueryByKey*: 根据参数删除URL中的某个检索参数
- *changeUrlWithoutRefresh*: 更新URL但不刷新当前页面

### 框架相关工具
#### angular1
- *safeApply*: 安全$apply方法，保证不进行重复的脏检查
- *DataStream*: 通过promise实现同步数据流

