# ESA Website

Welcome to the ESA Website repository!

Below is how to get started :)

# Getting Started

Ensure you have `Node` installed. Installation can be found [here](https://nodejs.org/en/download).

Ensure you have `pnpm` installed. An installation guide can be found [here](https://pnpm.io/installation).

> It is recommended that you install `pnpm` using `npm`
> Run the following command in your terminal to install `pnpm` using `npm` is:
>
> `npm install -g pnpm@latest-10`

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

# S3
S3_BUCKET=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_REGION=
```

Finally, run the project:

```
pnpm dev
```

## Our Members are:
- Owen
- Maternus
- Kieran
- Joseph
- Daniel
- Jos 🤫
- Charles
- Jey Cin
- Henry
- Jedrex