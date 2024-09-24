const my_parse_float = (val) => parseFloat(("" + val).replace(",", "."));

const N_PARTICLES = 1000;
const P_REMAIN = 0.8;
let sym_degree = 0.5;

let current_state = [0, N_PARTICLES, 0];
let last_transitions = Array(current_state.length)
    .fill(null)
    .map(() => Array(current_state.length).fill(0));
let transition_matrix = [
    [P_REMAIN, 1 - P_REMAIN, 0],
    [0, P_REMAIN, 1 - P_REMAIN],
    [1 - P_REMAIN, 0, P_REMAIN],
];

const STEP_INTERVAL = 100;
let continue_flag = false;

const COLOR_POWER = 0.75;

function initialize() {
    current_state = [0, N_PARTICLES, 0];
    last_transitions = Array(current_state.length)
        .fill(null)
        .map(() => Array(current_state.length).fill(0));
    transition_matrix = [
        [
            P_REMAIN,
            (1 - P_REMAIN) * (sym_degree / 2),
            (1 - P_REMAIN) * (1 - sym_degree / 2),
        ],
        [
            (1 - P_REMAIN) * (1 - sym_degree / 2),
            P_REMAIN,
            (1 - P_REMAIN) * (sym_degree / 2),
        ],
        [
            (1 - P_REMAIN) * (sym_degree / 2),
            (1 - P_REMAIN) * (1 - sym_degree / 2),
            P_REMAIN,
        ],
    ];
}

function perform_transitions() {
    const n_states = current_state.length;
    let prev_state = current_state.slice();
    current_state = Array(n_states).fill(0);
    last_transitions = Array(current_state.length)
        .fill(null)
        .map(() => Array(current_state.length).fill(0.0));
    let switches = 0;
    for (let from_idx = 0; from_idx < n_states; from_idx += 1) {
        for (
            let agent_idx = 0;
            agent_idx < prev_state[from_idx];
            agent_idx += 1
        ) {
            let to_idx = 0;
            let pick = Math.random();
            for (; to_idx < n_states; to_idx += 1) {
                pick = pick - transition_matrix[from_idx][to_idx];
                if (pick <= 0) {
                    break;
                }
            }
            if (to_idx >= n_states) {
                to_idx = n_states - 1;
            }
            current_state[to_idx] = current_state[to_idx] + 1;
            last_transitions[from_idx][to_idx] =
                last_transitions[from_idx][to_idx] + 1;
            if (from_idx != to_idx) {
                switches = switches + 1;
            }
        }
    }
    last_transitions = last_transitions.map((row) =>
        row.map((v) => v / switches)
    );
}

function update_plot() {
    const n_states = current_state.length;
    for (let state_idx = 0; state_idx < n_states; state_idx += 1) {
        let state_circle = document.getElementById(`stateCircle${state_idx}`);
        let color_intensity = Array(3).fill(
            255 -
                Math.round(
                    255 *
                        Math.pow(
                            current_state[state_idx] / N_PARTICLES,
                            COLOR_POWER
                        )
                )
        );
        color_intensity[state_idx] = 255;
        state_circle.style.fill = `rgb(${color_intensity[0]},${color_intensity[1]},${color_intensity[2]})`;
    }

    for (let from_idx = 0; from_idx < n_states; from_idx += 1) {
        for (let to_idx = 0; to_idx < n_states; to_idx += 1) {
            if (from_idx == to_idx) {
                continue;
            }
            let transition_arrow = document.getElementById(
                `transitionArrow${from_idx}${to_idx}`
            );
            let color_intensity = Array(3).fill(
                255 -
                    Math.round(
                        255 *
                            Math.pow(
                                last_transitions[from_idx][to_idx],
                                COLOR_POWER
                            )
                    )
            );
            color_intensity[from_idx] = 255;
            transition_arrow.style.stroke = `rgb(${color_intensity[0]},${color_intensity[1]},${color_intensity[2]})`;
        }
    }
}

function frame() {
    perform_transitions();

    update_plot();

    if (continue_flag) {
        window.setTimeout(frame, STEP_INTERVAL);
    } else {
        simulate_btn.disabled = false;
    }
}

// events
let simulate_btn = document.getElementById("simulate");
simulate_btn.addEventListener("click", () => {
    simulate_btn.disabled = true;
    stop_btn.disabled = false;
    continue_flag = true;

    sym_degree =
        1 - my_parse_float(document.getElementById("assym_degree").value);
    initialize();
    frame();
});
let stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click", () => {
    stop_btn.disabled = true;
    continue_flag = false;
});

/*const N_SAMPLES = 1000;
const STEP_INTERVAL = 100;
let continue_flag = false;

let pdf_plot = new plotlyPlot("pdfPlot", ["k", "p(k)"], [10, 15, 40, 60]);
pdf_plot.setRanges(true, [-0.1, 1.1]);
pdf_plot.reset();

const COLORS = ["#c11", "#05a"];

let hist_taken = 0;
let hist_vals = [];
let hist_binom = [];
let hist_hyper = [];

let n_balls = 5;
let n_reds = 2;

function do_draw_ball(n_balls, n_reds) {
    return rng.uniform(0, n_balls) <= n_reds;
}

function perform_single_draw(n_draws, n_balls, n_reds, no_replace = true) {
    let current_balls = n_balls;
    let current_reds = n_reds;
    let drawn_reds = 0;
    let drawn_balls = 0;
    if (n_draws > n_balls && no_replace) {
        n_draws = n_balls;
    }
    for (; drawn_balls < n_draws; drawn_balls = drawn_balls + 1) {
        let is_red = do_draw_ball(current_balls, current_reds);
        if (is_red) {
            if (no_replace) {
                current_reds = current_reds - 1;
            }
            drawn_reds = drawn_reds + 1;
        }
        if (no_replace) {
            current_balls = current_balls - 1;
        }
    }
    return drawn_reds;
}

function perform_multi_draw(
    n_steps,
    n_draws,
    n_balls,
    n_reds,
    no_replace = true
) {
    return Array(n_steps)
        .fill(null)
        .map(() => perform_single_draw(n_draws, n_balls, n_reds, no_replace));
}

function take_identical_samples(n_steps, n_draws, n_balls, n_reds) {
    let binom_sample = perform_multi_draw(
        n_steps,
        n_draws,
        n_balls,
        n_reds,
        true
    );
    let hyper_sample = perform_multi_draw(
        n_steps,
        n_draws,
        n_balls,
        n_reds,
        false
    );
    return [binom_sample, hyper_sample];
}

function update_histograms(histogram_max, binom_sample, hyper_sample) {
    hist_taken = 0;
    hist_vals = Array(histogram_max + 1)
        .fill(null)
        .map((v, i) => i);
    hist_binom = Array(histogram_max + 1).fill(0);
    hist_hyper = Array(histogram_max + 1).fill(0);

    let idx;
    for (idx = 0; idx < N_SAMPLES; idx += 1) {
        hist_binom[binom_sample[idx]] += 1;
        hist_hyper[hyper_sample[idx]] += 1;
    }
    hist_taken = hist_taken + N_SAMPLES;
}

function plot_histograms() {
    pdf_plot.update(
        [hist_vals, hist_vals],
        [
            hist_binom.map((v) => v / hist_taken),
            hist_hyper.map((v) => v / hist_taken),
        ],
        "lines",
        COLORS
    );
}

function frame(n_draws) {
    let binom_sample, hyper_sample;
    [binom_sample, hyper_sample] = take_identical_samples(
        N_SAMPLES,
        n_draws,
        n_balls,
        n_reds
    );

    update_histograms(n_balls, binom_sample, hyper_sample);

    plot_histograms();

    document.getElementById("pdfPlotTitleLabel").innerHTML = n_draws;

    if (continue_flag && n_draws < n_balls) {
        window.setTimeout(() => frame(n_draws + 1), STEP_INTERVAL);
    } else {
        iterate_btn.disabled = false;
        if (n_draws >= n_balls) {
            stop_btn.click();
        }
    }
}

// events
let iterate_btn = document.getElementById("iterate");
iterate_btn.addEventListener("click", () => {
    iterate_btn.disabled = true;
    stop_btn.disabled = false;
    continue_flag = true;

    n_balls = parseInt(document.getElementById("n_balls").value);
    n_reds = parseInt(document.getElementById("n_reds").value);

    if (n_reds > n_balls) {
        n_reds = n_balls;
    }
    document.getElementById("n_reds").value = n_reds;

    let n_draws = 1;
    frame(n_draws);
});
let stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click", () => {
    stop_btn.disabled = true;
    continue_flag = false;
});*/
