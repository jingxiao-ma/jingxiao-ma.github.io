---
layout: page
title: Low-Precision Training of Deep Neural Network
description: An INT8-quantized training framework built upon the Forward-Forward algorithm, enabling efficient and memory-light deep learning training on resource-constrained edge devices
img: assets/img/ff_intro.jpg
importance: 4
category: research
related_publications: true
---

Paper *FF-INT8: Efficient Forward-Forward DNN Training on Edge Devices with INT8 Precision* {% cite ma2025ff %} published on the 62th Design Automation Conference.

### Limitations of Backpropagation and Existing Quantization

Backpropagation has been the standard for DNN training but is inefficient for resource-constrained systems because it requires storing the entire computational graph and performing expensive backward computations. Quantization—a widely adopted technique for inference acceleration—reduces precision of weights and activations (e.g., to INT8), lowering both memory footprint and computational overhead. However, most quantization work has focused on inference rather than training. Directly quantizing gradients for backpropagation often leads to severe accuracy degradation due to error accumulation across layers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/loss_acc.png" title="loss_acc" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dist.png" title="dist" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left figure shows that quantization on backpropagation increases loss to nearly infinity and reduces accuracy significantly. The reason is that gradient distribution becomes extreme on deeper networks (as right figure shows.)
</div>

### Forward-Forward Algorithm as an Alternative

Recently, Hinton’s Forward-Forward (FF) algorithm was introduced as a training paradigm that eliminates the backward pass by replacing it with an additional forward pass. The FF algorithm trains each layer greedily using “positive” and “negative” examples and a local goodness function, thereby avoiding the need to store global computational graphs. This makes FF naturally appealing for edge environments where memory efficiency is paramount. Yet, vanilla FF faces limitations: it struggles with convergence, scales poorly to deep architectures, and performs suboptimally with complex components like residual blocks.

<div class="row">
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/BP_vs_FF.png" title="BP_vs_FF" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison between backpropagation and Forward-Forward algorithm
</div>

### The FF-INT8 Project

The FF-INT8 project addresses these challenges by uniting the strengths of quantization and the Forward-Forward algorithm:

- INT8 Quantized Training via FF: FF’s layer-wise greedy training naturally mitigates gradient quantization errors that cripple backpropagation-based INT8 training. Each layer is trained independently in INT8 precision, which aligns well with specialized low-precision hardware available in many edge devices.
- “Look-Ahead” Scheme for Convergence and Accuracy: To overcome FF’s limited layer interaction, the project introduces a novel look-ahead loss that allows earlier layers to incorporate feedback from later layers. This balances local optimization with global awareness, improving both convergence speed and final accuracy, especially in deep architectures with residual blocks.
-Hardware-Aware Validation: The proposed methods are validated on the NVIDIA Jetson Orin Nano, a representative edge device with INT8 acceleration support. Results demonstrate tangible gains:
  - 4.6% faster training
  - 8.3% energy savings
  - 27.0% lower memory footprint
  - while maintaining accuracy within 0.4% of full-precision backpropagation and even outperforming state-of-the-art INT8 training methods in some cases.

### Broader Significance

By rethinking the fundamentals of training, FF-INT8 opens the door to on-device learning—where edge devices can adapt models locally without relying on costly cloud retraining. This has far-reaching implications for privacy, personalization, and sustainability in AI deployment. The project thus represents a step toward bridging efficient algorithmic design, quantization techniques, and hardware-aware deep learning, providing a promising foundation for future energy-efficient AI systems.
