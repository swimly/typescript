# Button 按钮

<!-- start -->

### 介绍

按钮用于触发一个操作，如提交表单。

<!-- end -->

<!-- start -->

### 颜色

通过`type`控制按钮颜色，可选值：`primary`，`danger`，`warning`，`success`。

<div class="code">
  <div class="v-button" type="primary">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" type="warning" margin="t12">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" type="success" margin="t12">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" type="danger" margin="t12">
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" type="primary">
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 图标

通过添加`v-icon`来实现图标和按钮的结合，具体请参考[`v-icon`](docs/common/v-icon/readme.md)。

<div class="code">
  <div class="v-button">
    <span class="v-button-icon">
      <span class="v-icon" name="search"></span>
    </span>
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button">
  <span class="v-button-icon">
    <span class="v-icon" name="search"></span>
  </span>
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 圆角

通过`conner`设置按钮的圆角大小，可选值`1`，`2`。

**conner圆角按钮**

<div class="code">
  <div class="v-button" conner='1'>
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" conner='1'>
  <span class="v-button-label">按钮</span>
</div>
```

**rounder圆弧按钮**

<div class="code">
  <div class="v-button" conner='2'>
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" conner='2'>
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 线条按钮

通过`outline="1"`设置线条按钮样式。

<div class="code">
  <div class="v-button" type="primary" outline="1">
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" type="primary" outline="1">
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 行内

通过`inline`设置行内按钮形式，按钮宽度根据文字长短自动撑开

<div class="code">
  <div class="v-button" inline="1">
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" inline="1">
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 大小

通过`size`设置按钮大小，可选值：`48`，`56`，`64`，`72`，`80`，默认值：`88`。

<div class="code">
  <div class="v-button" inline="1" size="48">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" inline="1" size="56">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" inline="1" size="64">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" inline="1" size="72">
    <span class="v-button-label">按钮</span>
  </div>
  <div class="v-button" inline="1" size="80">
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" inline="1">
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->

<!-- start -->

### 加载

通过`loading='1'`控制按钮的加载状态。

<div class="code">
  <div class="v-button" loading="1">
    <span class="v-button-icon">
      <span class="v-icon" name="refresh"></span>
    </span>
    <span class="v-button-label">按钮</span>
  </div>
</div>

``` html
<div class="v-button" loading="1">
  <span class="v-button-icon">
    <span class="v-icon" name="refresh"></span>
  </span>
  <span class="v-button-label">按钮</span>
</div>
```

<!-- end -->


