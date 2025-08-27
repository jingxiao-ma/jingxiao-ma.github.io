---
layout: page
title: Hardware Metric Analysis using LLMs
description: A benchmark for Verilog code metric reasoning using fine-tuned Large Language Models (LLMs)
img: assets/img/MetRex_intro.jpg
importance: 2
category: research
related_publications: true
---

### Background and Motivation

Recent advances in Large Language Models (LLMs) have transformed the landscape of hardware design automation. LLMs have been applied successfully to tasks such as Verilog code generation, EDA tool scripting, accelerator design, and RTL error fixing. However, while these applications demonstrate that LLMs can generate and refine HDL code, a crucial gap remains: LLMs are not yet proficient at reasoning about post-synthesis metrics such as area, delay, and static power. These metrics are critical to hardware designers, as they directly impact design performance, energy efficiency, and manufacturability.

Existing approaches often use LLMs to iteratively refine code to meet design constraints (e.g., area or power budgets) through prompting or search-based techniques. Yet, such methods do not give LLMs deeper insight into how HDL-level design choices propagate into synthesis outcomes. To address this gap, MetRex proposes a direct framework for metric reasoning—enabling LLMs to estimate synthesis results from code itself.

### What is MetRex?

MetRex is the first benchmark designed to evaluate LLM reasoning about post-synthesis metrics of Verilog HDL designs. It provides:

- A large-scale dataset of 25,868 Verilog designs, annotated with three key metrics:
  - Area
  - Delay
  - Static power
- A Chain of Thought (CoT) template, which structures intermediate reasoning steps such as gate counts, per-gate metrics, and critical path analysis, guiding LLMs toward more accurate predictions.
- An automated data-cleaning flow using Verilog compilers, synthesis tools, and LLM agents to ensure that only clean, synthesizable designs are included.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cot.jpg" title="cot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of Chain of Thought
</div>

By integrating reasoning steps into dataset annotations, MetRex helps LLMs move beyond surface-level code generation to deeper code-to-metric inference.


### Key Contributions

Paper *Metrex: A benchmark for verilog code metric reasoning using llms*{% cite abdelatty2025metrex %} is published in ASPDAC'25.

GitHub repo is available at [https://github.com/scale-lab/MetRex](https://github.com/scale-lab/MetRex).

The project makes four main contributions:
- Benchmark Dataset: MetRex introduces the first large-scale dataset for metric reasoning, covering diverse Verilog sources such as RTL-Coder, VeriGen, ISCAS benchmarks, OpenCores, and NVDLA designs.
- Automated Workflow: A synthesis-and-repair loop integrates LLMs with tools like Yosys, Icarus Verilog, and Cadence Genus to fix errors and annotate metrics automatically.
- Chain-of-Thought Reasoning: The CoT template provides interpretable reasoning steps for metric estimation, improving accuracy compared to direct prompting by up to 8.9% across different metrics.
- Supervised Fine-Tuning (SFT): Fine-tuning LLMs with MetRex improves performance by 37.0% (area), 25.3% (delay), and 25.7% (static power) compared to few-shot prompting.
- Comparative Analysis: Against regression-based baselines such as MasterRTL, MetRex-trained LLMs achieve up to 17.4% higher accuracy within 5% error margins, while also being 1.7× faster by eliminating preprocessing.

### Broader Impact

MetRex highlights the unique strengths of LLMs in hardware design:
- Direct Verilog processing: Unlike conventional ML models that require feature extraction (e.g., ASTs or operator graphs), LLMs can analyze raw HDL code without lossy transformations.
- Interpretability: Through CoT reasoning, LLM predictions are explainable, offering gate-level breakdowns and logical derivations rather than opaque numerical outputs.
- Scalability: With fine-tuning, LLMs can provide accurate estimates at scale, reducing dependence on costly synthesis runs during early design exploration.
- Ultimately, MetRex lays the groundwork for a new direction in LLM-powered EDA, where models not only generate RTL but also reason about its implications, enabling faster, more insightful design space exploration.
