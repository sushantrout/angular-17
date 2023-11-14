# Angular17
```
@for (product of products; track product.id) {
    <div class="card">
        <h2 class="card-title">{{product.title}}</h2>
        […]
    </div>
}
@empty {
    <p class="text-lg">No Products found!</p>
}
```

```
@if (product.price < 500) {
    […]
}
@else if (product.price < 1000) {
    […]
}
@else {
    […]
}
```


```
@switch (mode) {
    @case ('full') {
      […]
    }
    @case ('small') {
      […]
    }
    @default {
      […]
    }
}

```

