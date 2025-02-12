`stable_diffusion.ipynb` and `aesthetics_metrics.ipynb` were written by us to train various diffusion models with Dreambooth and evaluate visual aesthetic quality on the frames from the 3D pipeline.

The custom config files were written by us and have the prompts and parameters we ran each scene generation with. There is one file for each film. `stable_diffusion_checkpoint` holds the name of the finetuned diffusion model (see all of [our models on Hugging Face](https://huggingface.co/emily49)) and the prompt includes the Dreambooth token and class.

`warp_inpaint_model.py` is a file from original [SceneScape](https://github.com/RafailFridman/SceneScape) code where our modifications take place. Our changes are:

1.  Integrating ControlNet in the `inpaint` function by constructing the conditioning mask from the warped image, dilating using opencv, and applying it when calling the inpainting pipeline. We load `control_v11p_sd15_inpaint` weights in `__init__`.
2.  Adding an additional case for the inpainting inference at the first time step with empty mask, which doesn't have conditioning from ControlNet. We added this in `__init__`.
3.  Experimenting with IP-Adapter, using other finetuned custom models, etc.\*

\*Note that this is the final variation of the code (Dreamboothed non-inpaint SD model + ControlNet) that we used to generate the results [here](https://tinyurl.com/stylescape-231n). We have commented out the IP-Adapter and Dreambooth inpaint SD model variants.
