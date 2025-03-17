# ESA Website

Welcome to the ESA Website repository!

Below is how to get started :)

# Getting Started

Ensure you have `Node` installed. Installation can be found [here](https://nodejs.org/en/download).

Ensure you have `pnpm` installed. An installation guide can be found [here](https://pnpm.io/installation).
> It is recommended that you install `pnpm` using `npm`
> Run the following command in your terminal to install `pnpm` using `npm` is:
> 
> ```npm install -g pnpm@latest-10```

Ensure `git` is also installed and run the following command at your desired folder:
```bash
git clone https://github.com/UoaWDCC/esa
```

Navigate to the project root and install dependencies:
```bash
pnpm install
```

Create a `.env` file at the root directory with the following attributes:
```
# Payload and DB stuff
DATABASE_URI=
PAYLOAD_SECRET=

# Cloudflare R2 stuff
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_ACCOUNT_ID=
R2_ENDPOINT=https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com
```

Finally, run the project:
```
pnpm dev
```

