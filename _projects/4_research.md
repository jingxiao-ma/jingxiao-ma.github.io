---
layout: page
title: Dynamic Neural Network with Weight-Enabling Scheme
description: A dynamic neural network framework that adaptively enables or disables weights during inference to balance accuracy and efficiency
img: assets/img/wenet_intro.jpg
importance: 15
category: research
related_publications: true
---

Paper *WeNet: Configurable Neural Network with Dynamic Weight-Enabling for Efficient Inference* {% cite ma2023wenet %} was published in the IEEE/ACM International Symposium on Low Power Electronics and Design (2023).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wenet_intro.png" title="intro" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Introduction of WeNet
</div>

### Motivation

Deep Neural Networks (DNNs) have become indispensable for modern applications such as object detection, gesture recognition, and augmented reality. However, when deployed on resource-limited edge devices, these models face critical constraints in terms of computation, timing, and energy consumption. While training can be offloaded to cloud servers, inference often needs to run directly on edge devices, where computational resources vary drastically depending on device type, background workloads, and power budgets. This makes adaptability a central challenge: how can a single DNN model flexibly operate under diverse runtime conditions while maintaining a balance between accuracy, efficiency, and latency?

### Limitations of Existing Approaches

Prior research has introduced several categories of dynamic neural networks to address runtime efficiency:
- Flexible Width: Adjusts the number of active neurons per layer at runtime. Although this reduces computation, it risks discarding important features and losing accuracy.
- Flexible Depth: Introduces early exits to shorten inference paths. While this saves resources, additional branching structures can increase memory overhead.
- Flexible Precision: Dynamically lowers numerical precision to save energy. This preserves neuron count but requires specialized hardware for mixed-precision operations.

While each strategy reduces inference cost, none provide a universal and fine-grained runtime control mechanism that is both hardware-friendly and accuracy-preserving.

### WeNet: A New Direction

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wenet_dense.png" title="dense" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of WeNet on dense layer
</div>

The WeNet framework (Weight-Enabling Network) introduces a new class of dynamic networks based on flexible weight-enabling:
- Instead of shrinking network width, depth, or precision, WeNet dynamically enables or disables subsets of weights during inference.
- Each enabled subset forms a sub-network that operates as a standalone model with specific accuracy–efficiency trade-offs.
- At runtime, edge devices can select the most suitable sub-network configuration depending on available resources, achieving significant adaptability without retraining or switching between multiple models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wenet_conv.png" title="conv" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of WeNet on convolution layer
</div>

### Key Innovations

- Dynamic Weight-Enabling: Layers are partitioned into independent groups where connections are selectively enabled. This ensures fewer computations while keeping the total number of neurons intact, preserving representational capacity better than width- or depth-based methods.
- Extension to Convolutional Layers: Through group convolution and channel shuffling, WeNet applies the same principle to CNNs. Channel shuffling ensures that reduced-weight sub-networks still exchange information across groups, mitigating accuracy loss.
- Training with Random Sub-Networks: During training, WeNet randomly samples sub-networks at each iteration and employs Switchable Batch Normalization (S-BN), ensuring all weight-enabling patterns are properly calibrated.
- Design Space Exploration (DSE): At inference time, WeNet applies an algorithm to explore the configuration space of sub-networks, finding Pareto-optimal operating points that balance accuracy, inference time, and energy consumption.

### Impact and Evaluation

Experimental results show that:
- On benchmarks such as ResNet-50, MobileNet-V2, and EfficientNet-B0, WeNet delivers substantial improvements in energy efficiency and inference speed while retaining accuracy.
- Channel-shuffling boosts accuracy by nearly 3% on average with negligible overhead.
- Compared to US-Nets (universally slimmable networks), WeNet consistently achieves better trade-offs, especially when targeting resource-constrained hardware like the NVIDIA Jetson Nano.
- Across devices from high-performance GPUs to low-power CPUs, WeNet demonstrates flexible adaptability, making it suitable for a broad range of deployment environments.
